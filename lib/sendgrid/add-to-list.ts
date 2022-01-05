import client from '@sendgrid/client';

client.setApiKey(process.env.SENDGRID_API_KEY);

type AddToListData = {
  firstName?: string;
  email: string;
};

export async function addToSendGridList(options: AddToListData) {
  const { email, firstName } = options;
  const listId = process.env.SENDGRID_LIST_ID;

  const [response] = await client.request({
    method: 'PUT',
    url: '/v3/marketing/contacts',
    body: {
      list_ids: [listId],
      contacts: [{ email, first_name: firstName }],
    },
  });

  return response.body;
}
