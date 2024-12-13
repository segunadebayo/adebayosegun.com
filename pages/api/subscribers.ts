import { getSendGridListCount } from 'lib/sendgrid/get-list-count';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = await getSendGridListCount();
    return res.status(200).json({ success: true, count: data.contact_count });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
}
