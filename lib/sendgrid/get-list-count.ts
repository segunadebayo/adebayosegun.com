import client from '@sendgrid/client';

client.setApiKey(process.env.SENDGRID_API_KEY);

export type ListCount = {
  contact_count: number;
  billable_count: number;
};

export async function getSendGridListCount() {
  const listId = process.env.SENDGRID_LIST_ID;
  const [response] = await client.request({
    method: 'GET',
    url: `/v3/marketing/lists/${listId}/contacts/count`,
  });

  return <ListCount>response.body;
}
