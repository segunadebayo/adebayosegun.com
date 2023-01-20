import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import Container from 'components/container';
import SEO from 'components/seo';
import SnippetCard from 'components/snippet-card';
import TagCheckboxGroup from 'components/tag-checkbox-group';
import useSnippetSearch from 'lib/use-snippet-search';

export default function Page() {
  const search = useSnippetSearch();

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

        <TagCheckboxGroup
          marginTop="10"
          data={search.allCategories}
          isChecked={(item) => search.filters.includes(item)}
          onChange={({ checked, value }) => {
            if (checked) {
              search.addCategory(value);
            } else {
              search.removeCategory(value);
            }
          }}
        />

        <Box marginTop="4rem">
          <SimpleGrid columns={{ base: 1, md: 2 }} direction="column" spacing="6">
            {search.results.map((snippet) => (
              <SnippetCard key={snippet.title} data={snippet} />
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </Container>
  );
}
