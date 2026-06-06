import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Suspense } from 'react';
// Skeleton Loading Component
const PageLoader = () => (_jsxs("div", { style: { padding: '40px', maxWidth: '1200px', margin: '0 auto' }, children: [_jsx("div", { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '30px' }, children: [1, 2].map(i => (_jsx("div", { style: {
                    height: '200px',
                    background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
                    backgroundSize: '200% 100%',
                    animation: 'shimmer 1.5s infinite',
                    borderRadius: '8px'
                } }, i))) }), _jsx("div", { style: {
                height: '60px',
                background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
                backgroundSize: '200% 100%',
                animation: 'shimmer 1.5s infinite',
                borderRadius: '8px',
                marginBottom: '30px'
            } }), [1, 2, 3, 4].map(i => (_jsx("div", { style: {
                height: '20px',
                background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
                backgroundSize: '200% 100%',
                animation: 'shimmer 1.5s infinite',
                borderRadius: '4px',
                marginBottom: '15px',
                width: i === 4 ? '60%' : '100%'
            } }, i))), _jsx("style", { children: `
      @keyframes shimmer {
        0% { background-position: -200% 0; }
        100% { background-position: 200% 0; }
      }
    ` })] }));
// Wrapper component with Suspense
export default function SuspenseWrapper({ children }) {
    return (_jsx(Suspense, { fallback: _jsx(PageLoader, {}), children: children }));
}
