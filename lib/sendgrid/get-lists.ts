import client from '@sendgrid/client';

client.setApiKey(process.env.SENDGRID_API_KEY);

export async function getSendGridLists() {
  const [response] = await client.request({
    method: 'GET',
    url: '/v3/marketing/lists',
  });

  return response.body;
}
