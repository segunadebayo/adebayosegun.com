import { allSnippets } from '.contentlayer/data';
import type { GetStaticPaths, GetStaticProps } from 'next';

export default function SnippetPage() {
  return <div>Snippet page</div>;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: allSnippets.map((snippet) => ({ params: { slug: snippet.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const snippet = allSnippets.find((snippet) => snippet.slug === params.slug);
  return { props: { snippet } };
};
