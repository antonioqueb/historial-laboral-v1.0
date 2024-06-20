import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';
import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    const session = await getServerSession({ req: request }, authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    return NextResponse.json({ session }, { status: 200 });
  } catch (error) {
    console.error('Error obtaining session:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
