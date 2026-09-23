import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log('Prosperus Track Event:', body);
    return NextResponse.json({ status: 'ok', tracked: true });
  } catch (e) {
    return NextResponse.json({ status: 'ok', tracked: false });
  }
}

export async function GET(request: Request) {
  return new NextResponse('// Prosperus Tracking Script Loaded', {
    headers: { 'Content-Type': 'application/javascript' },
  });
}
