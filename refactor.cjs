const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

// Hooks and modules that mean it should be a client component
const clientIndicators = [
    'useState',
    'useEffect',
    'useContext',
    'useRef',
    'useCallback',
    'useMemo',
    'useReducer',
    'createContext',
    'react-router',
    'framer-motion',
    'swiper',
    'react-intersection-observer',
    'react-countup',
    '@ramonak/react-progress-bar',
    'next/navigation'
];

function processFile(filePath) {
    if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts')) return;
    
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // React router replacements
    if (content.includes('react-router')) {
        content = content.replace(/import\s+{(.*?)}\s+from\s+['"]react-router['"];?/g, (match, imports) => {
            let nextLinkImports = [];
            let nextNavImports = [];
            let reactImports = [];
            
            const importParts = imports.split(',').map(i => i.trim()).filter(Boolean);
            
            importParts.forEach(imp => {
                if (imp === 'Link') nextLinkImports.push('Link');
                else if (imp === 'useNavigate') nextNavImports.push('useRouter as useNavigate'); // Remap for easy drop-in
                else if (imp === 'useLocation') nextNavImports.push('usePathname as useLocation');
                else if (imp === 'Outlet') {} // Ignore Outlet, as we handled it via layout.tsx
                else if (imp === 'RouterProvider' || imp === 'createBrowserRouter') {} // Ignore routing initialization
                else {
                    // Unknown react-router import
                }
            });
            
            let newImports = '';
            if (nextLinkImports.length > 0) newImports += `import Link from 'next/link';\n`;
            if (nextNavImports.length > 0) newImports += `import { ${nextNavImports.join(', ')} } from 'next/navigation';\n`;
            
            return newImports;
        });

        // Convert <Link to="..."> to <Link href="...">
        content = content.replace(/<Link\s+([^>]*?)to=/g, '<Link $1href=');
        modified = true;
    }

    // Determine if we need "use client"
    if (!content.includes('"use client"') && !content.includes("'use client'")) {
        const needsClient = clientIndicators.some(indicator => content.includes(indicator));
        // Additionally, if it imports ContextProvider or similar client-only context.
        const usesContext = content.includes('useGorentContext') || content.includes('ContextProvider');
        
        if (needsClient || usesContext) {
            content = '"use client";\n\n' + content;
            modified = true;
        }
    }

    if (modified) {
        fs.writeFileSync(filePath, content);
    }
}

function walk(dir) {
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat && stat.isDirectory()) {
            walk(fullPath);
        } else {
            processFile(fullPath);
        }
    });
}

walk(srcDir);
console.log('Refactoring complete.');
