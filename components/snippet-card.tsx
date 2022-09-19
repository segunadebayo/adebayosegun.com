import { Snippet } from '.contentlayer/types';
import { Box, Heading, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';
import Image from 'next/image';
import NextLink from 'next/link';

type SnippetCardProps = {
  data: Snippet;
};

export default function SnippetCard(props: SnippetCardProps) {
  const { data: snippet } = props;

  return (
    <LinkBox bg="gray.800" padding="6" rounded="lg">
      <Box rounded="md" overflow="hidden" display="inline-flex">
        <Image src={snippet.logo} alt="Snippet language" width="40" height="40" />
      </Box>
      <Heading size="md" as="h3" marginBottom="2" marginTop="3">
        <NextLink href={`/snippets/${snippet.slug}`} passHref>
          <LinkOverlay>{snippet.title}</LinkOverlay>
        </NextLink>
      </Heading>
      <Text opacity={0.7}>{snippet.description}</Text>
    </LinkBox>
  );
}
