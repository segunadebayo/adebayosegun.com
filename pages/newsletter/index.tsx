import type { GetStaticProps } from 'next';

export default function NewsletterPage() {
  return <div>Newsletter page</div>;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return { props: {} };
};
