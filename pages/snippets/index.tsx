import { allSnippets } from '.contentlayer/data';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Container from 'components/container';
import SEO from 'components/seo';
import SnippetCard from 'components/snippet-card';

export default function Page() {
  return (
    <Container>
      <SEO title="Code Snippets" />
      <Box py="vGutter">
        <Box>
          <Heading size="3xl" marginBottom="6">
            Snippets
          </Heading>
          <Text fontSize="lg" maxW="560px">
            A collection of solutions to small problems I've faced in the past. They're all
            copy-paste ready 😉
          </Text>
        </Box>

        <Box marginTop="6rem">
          <Flex direction="column" gap="10">
            {allSnippets.map((snippet) => (
              <SnippetCard key={snippet.title} data={snippet} />
            ))}
          </Flex>
        </Box>
      </Box>
    </Container>
  );
}
