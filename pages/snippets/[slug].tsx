import { allSnippets } from '.contentlayer/data';
import { Snippet } from '.contentlayer/types';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Container from 'components/container';
import HashTags from 'components/hash-tags';
import LinkItem from 'components/link-item';
import MDXComponents from 'components/mdx-components';
import { BlogIcon } from 'components/nav-icons';
import SEO from 'components/seo';
import { TwitterIcon } from 'components/social-icons';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';

export default function Page({ snippet }: { snippet: Snippet }) {
  const Component = useMDXComponent(snippet.body.code);

  return (
    <Container>
      <SEO title={snippet.title} description={snippet.description} />
      <Box maxWidth="4xl" marginX="auto" paddingTop="12" paddingBottom="8rem">
        <article>
          <Box marginBottom="6">
            <Flex justify="space-between" align="flex-start">
              <Box marginBottom="4">
                <Heading size="2xl" as="h1" marginBottom="3" color="white">
                  {snippet.title}
                </Heading>
                <Text>{snippet.description}</Text>
              </Box>
              <Flex rounded="md" overflow="hidden" mt="3">
                <Image width="40px" height="40px" src={snippet.logo} alt="" />
              </Flex>
            </Flex>

            <HashTags data={snippet.categories} />
          </Box>

          <Box
            sx={{
              color: 'gray.500',
              lineHeight: '1.75',
              'p + p': {
                marginTop: '2',
              },
            }}
          >
            <Component components={MDXComponents} />
          </Box>
        </article>

        <Flex justify="space-between" mt="20">
          <LinkItem href={snippet.tweetUrl} icon={TwitterIcon}>
            Tweet this snippet
          </LinkItem>
          <LinkItem href={snippet.editUrl} icon={BlogIcon}>
            Edit on github
          </LinkItem>
        </Flex>
      </Box>
    </Container>
  );
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
