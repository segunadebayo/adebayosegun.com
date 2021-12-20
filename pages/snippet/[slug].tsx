import type { GetStaticPaths, GetStaticProps } from 'next';

export default function SnippetPage() {}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return { props: {} };
};
