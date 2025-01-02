import { NextRequest, NextResponse } from 'next/server';

export async function POST(request:NextRequest) {
  try {
    const { url } = await request.json();

    if (!url) {
      return NextResponse.json({ error: 'No URL provided' }, { status: 400 });
    }

    const response = await fetch(url);
    
    if (!response.ok) {
      return NextResponse.json({ error: 'Failed to fetch file' }, { status: 500 });
    }

    const contentType = response.headers.get('Content-Type');
    const fileStream = response.body;

    return new NextResponse(fileStream, {
      headers: {
        'Content-Disposition': `attachment; filename="downloaded-file"`, // You can dynamically set the filename
        'Content-Type': contentType || 'application/octet-stream',
      },
    });
  } catch (error) {
    console.error('Download failed', error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
