import { NextPageContext } from 'next';
import { getAbsoluteURL } from './router-utils';

export default function getOpenGraphUrl(ctx: NextPageContext) {
  const searchParams = new URLSearchParams();
  const fullImageURL = getAbsoluteURL(`/api/open-graph-image?${searchParams}`);
  return { imageURL: fullImageURL };
}
