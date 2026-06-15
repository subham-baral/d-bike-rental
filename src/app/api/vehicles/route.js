import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const url = `${process.env.CMS_API_URL}/delivery/contents`;
        
        const requestBody = {
            content_type_id: "vehicle",
            status: "published",
            sort_by: "created_at",
            sort_order: "desc",
            per_page: 50 // Fetch enough to display in sliders
        };

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.CMS_API_TOKEN}`,
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
            },
            body: JSON.stringify(requestBody),
            cache: 'no-store' // Ensure we get fresh data
        });

        if (!response.ok) {
            throw new Error(`CMS API responded with status: ${response.status}`);
        }

        const data = await response.json();
        
        if (!data.success) {
            throw new Error('CMS API returned unsuccessful response');
        }

        return NextResponse.json({ success: true, data: data.data.data }); // Nested data array
    } catch (error) {
        console.error('Error fetching vehicles URL:', `${process.env.CMS_API_URL}/delivery/contents`);
        console.error('Token exists?:', !!process.env.CMS_API_TOKEN);
        console.error('Error details:', error);
        return NextResponse.json(
            { success: false, error: error.message || 'Failed to fetch vehicles data' },
            { status: 500 }
        );
    }
}
