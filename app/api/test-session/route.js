// app/api/test-session/route.js
import { getSession } from 'next-auth/react';
import { NextResponse } from 'next/server';

export async function GET(req) {
  const session = await getSession({ req });
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  return NextResponse.json({ session }, { status: 200 });
}
