import { addToSendGridList } from 'lib/sendgrid/add-to-list';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ success: false, message: 'An email address is required' });
  }

  try {
    await addToSendGridList({ email });
    return res.status(200).json({ success: true });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
}
