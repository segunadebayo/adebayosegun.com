import { Box, Flex, Heading, Text, Wrap } from '@chakra-ui/react';
import Container from 'components/container';
import EmptyState from 'components/empty-state';
import SearchInput from 'components/search-input';
import SEO from 'components/seo';
import TagCheckbox from 'components/tag-checkbox';
import TalkCard from 'components/talk-card';
import useTalkSearch from 'lib/use-talk-search';
import { useRouter } from 'next/router';

export default function Page() {
  const search = useTalkSearch();

  const { isReady } = useRouter();
  if (!isReady) return null;

  return (
    <Container>
      <SEO title="Talks" />
      <Box py="vGutter">
        <Box>
          <Heading size="3xl" marginBottom="6" as="h1" color="white">
            Talks
          </Heading>
          <Text fontSize="lg" maxW="560px">
            I speak at conferences and events each year. Most of my talks are live coding or demoing
            sessions which can be scary but fun!
          </Text>
        </Box>

        <Box maxWidth="xl" mt="8">
          <SearchInput
            placeholder="Search talks"
            defaultValue={search.defaultValue}
            onChange={(value) => {
              search.setParams(value);
            }}
          />
        </Box>

        <Wrap mt="5" spacing="3">
          {search.allTags.map((tag) => {
            return (
              <TagCheckbox
                key={tag}
                value={tag}
                checked={search.filters.includes(tag)}
                onChange={(e) => {
                  if (e.target.checked) search.addTag(tag);
                  else search.removeTag(tag);
                }}
              >
                {tag}
              </TagCheckbox>
            );
          })}
        </Wrap>

        <Box marginTop="6rem">
          {search.isEmptyResult ? (
            <EmptyState />
          ) : (
            <Flex direction="column" gap="20">
              {search.results.map((talk) => (
                <TalkCard key={talk.title} data={talk} />
              ))}
            </Flex>
          )}
        </Box>
      </Box>
    </Container>
  );
}
