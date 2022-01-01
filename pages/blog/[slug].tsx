import { allBlogs } from '.contentlayer/data';
import { Blog } from '.contentlayer/types';
import { Box, Circle, Flex, Heading, HStack, Text, Wrap, WrapItem } from '@chakra-ui/react';
import { chakra } from '@chakra-ui/system';
import AuthorProfile from 'components/author-profile';
import Container from 'components/container';
import LinkItem from 'components/link-item';
import MDXComponents from 'components/mdx-components';
import { BlogIcon } from 'components/nav-icons';
import { TwitterIcon } from 'components/social-icons';
import formatDate from 'lib/format-date';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';

export default function BlogPage({ blog }: { blog: Blog }) {
  const Component = useMDXComponent(blog.body.code);
  const date = formatDate(blog.publishedAt);

  return (
    <Container>
      <Box maxWidth="2xl" marginX="auto" paddingTop="12" paddingBottom="8rem">
        <article>
          <Box marginBottom="6">
            <Heading size="2xl" as="h1" marginBottom="3">
              {blog.title}
            </Heading>

            <Wrap>
              {blog.tags.map((item) => (
                <WrapItem key={item} opacity={0.8} userSelect="none">
                  <Box as="span" color="sage.base">
                    #
                  </Box>
                  <span>{item}</span>
                </WrapItem>
              ))}
            </Wrap>

            <Flex
              direction={{ base: 'column-reverse', md: 'row' }}
              gap="4"
              justify="space-between"
              marginTop={{ base: '4', md: '8' }}
            >
              <HStack spacing="3">
                <Circle overflow="hidden">
                  <Image
                    alt="Segun Adebayo"
                    src="https://vercel.com/api/www/avatar/6ad338204b00eabaea90981779d3835976b53833?s=64"
                    layout="fixed"
                    width="32px"
                    height="32px"
                  />
                </Circle>
                <Text fontWeight="medium">Segun Adebayo</Text>
              </HStack>

              <HStack color="sage.base">
                <chakra.span>{blog.readingTime.text}</chakra.span>
                <span aria-hidden>•</span>
                <time dateTime={date.iso}>{date.pretty}</time>
              </HStack>
            </Flex>
          </Box>

          <Box
            position={'relative'}
            height="320px"
            rounded="lg"
            overflow="hidden"
            marginTop="10"
            marginBottom="16"
          >
            <Image src={blog.image} alt={blog.title} layout="fill" objectFit="cover" priority />
          </Box>

          <Box
            sx={{
              color: 'gray.400',
              lineHeight: '1.75',
              'p + p': {
                marginTop: '2',
              },
            }}
          >
            <Component components={MDXComponents} />
          </Box>
        </article>

        <Flex justify="space-between" my="20">
          <LinkItem href={blog.tweetUrl} icon={TwitterIcon}>
            Tweet this article
          </LinkItem>
          <LinkItem href={blog.editUrl} icon={BlogIcon}>
            Edit on github
          </LinkItem>
        </Flex>

        <Box as="hr" borderColor="whiteAlpha.200" marginY="3rem" />

        <AuthorProfile />
      </Box>
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: allBlogs.map((blog) => ({ params: { slug: blog.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const blog = allBlogs.find((blog) => blog.slug === params.slug);
  return { props: { blog } };
};
