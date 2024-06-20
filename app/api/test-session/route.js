// app/api/test-session/route.js
import { getSession } from 'next-auth/react';

export async function GET(req, res) {
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  return res.status(200).json({ session });
}
