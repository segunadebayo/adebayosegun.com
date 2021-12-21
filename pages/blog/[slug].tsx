import { allBlogs } from '.contentlayer/data';
import { Blog } from '.contentlayer/types';
import { Circle, Flex, HStack } from '@chakra-ui/layout';
import { chakra } from '@chakra-ui/system';
import MDXComponents from 'components/mdx-components';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';

export default function BlogPage({ blog }: { blog: Blog }) {
  const Component = useMDXComponent(blog.body.code);

  const date = new Date(blog.publishedAt);
  const formattedDate = `${date.toLocaleString('default', {
    month: 'long'
  })} ${date.getDate()}, ${date.getFullYear()}`;

  return (
    <chakra.div>
      <chakra.div mb="12" mt="8" />
      <chakra.article
        display="flex"
        flexDir="column"
        width="full"
        maxW="2xl"
        mx="auto"
        sx={{
          fontSize: 'sm',
          'p + p': {
            marginTop: '2'
          }
        }}
      >
        <chakra.div mb="6">
          <chakra.h1 fontSize="2xl" fontWeight="bold" mb="3">
            {blog.title}
          </chakra.h1>
          <Flex justify="space-between">
            <HStack>
              <Circle overflow="hidden">
                <Image
                  alt="Segun Adebayo"
                  src="https://vercel.com/api/www/avatar/6ad338204b00eabaea90981779d3835976b53833?s=64"
                  layout="fixed"
                  width="24px"
                  height="24px"
                />
              </Circle>
              <p>Segun Adebayo</p>
              <chakra.span color="gray.300">/</chakra.span>
              <time dateTime={date.toISOString()}>{formattedDate}</time>
            </HStack>
            <chakra.span>{blog.readingTime.text}</chakra.span>
          </Flex>
        </chakra.div>
        <Component components={MDXComponents} />
      </chakra.article>
    </chakra.div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: allBlogs.map((blog) => ({ params: { slug: blog.slug } })),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const blog = allBlogs.find((blog) => blog.slug === params.slug);
  return { props: { blog } };
};
