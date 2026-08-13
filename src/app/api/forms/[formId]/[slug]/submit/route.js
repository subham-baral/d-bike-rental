import { NextResponse } from 'next/server';

export async function POST(request, { params }) {
  try {
    const { formId, slug } = await params;
    const body = await request.json();

    const baseUrl = process.env.CMS_API_URL || process.env.NEXT_PUBLIC_CMS_API_URL || 'https://cmsapi.one9ty.com/api/v1';
    const targetUrl = `${baseUrl}/public/forms/${formId}/${slug}/submit`;

    const response = await fetch(targetUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      return NextResponse.json(
        { success: false, error: errorData?.message || `API responded with status: ${response.status}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error proxying form submission:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
