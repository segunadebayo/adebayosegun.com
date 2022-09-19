import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import { BlogCard } from 'components/blog-card';
import Container from 'components/container';
import FeaturedBlogCard from 'components/featured-blog-card';
import SearchInput from 'components/search-input';
import SEO from 'components/seo';
import TagCheckboxGroup from 'components/tag-checkbox-group';
import { allFeaturedBlogs } from 'lib/contentlayer-utils';
import useBlogSearch from 'lib/use-blog-search';
import { useRouter } from 'next/router';

export default function Page() {
  const search = useBlogSearch();

  const { isReady } = useRouter();
  if (!isReady) return null;

  return (
    <Container>
      <SEO title="Blog" />
      <Box py="vGutter">
        <Box>
          <Heading size="3xl" marginBottom="6" as="h1" color="white">
            Blog
          </Heading>
          <Text fontSize="lg" maxW="560px">
            Here's a list of articles, thoughts and ideas around topics like design systems,
            accessibility, state machines and lots more.
          </Text>
        </Box>

        <Box maxWidth="xl" mt="8">
          <SearchInput
            placeholder="Search blog"
            defaultValue={search.defaultValue}
            onChange={(value) => {
              search.setParams(value);
            }}
          />
        </Box>

        <TagCheckboxGroup
          marginTop="5"
          data={search.tags}
          isChecked={(item) => search.filters.includes(item)}
          onChange={({ checked, value }) => {
            if (checked) search.addTag(value);
            else search.removeTag(value);
          }}
        />

        <Box marginTop="6rem">
          {search.hasFilter || search.hasQuery ? null : (
            <FeaturedBlogCard data={allFeaturedBlogs[0]} />
          )}
          <SimpleGrid columns={{ base: 1, md: 3 }} mt="4rem" spacing="10">
            {search.results.map((blog) => (
              <BlogCard key={blog.title} data={blog} />
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </Container>
  );
}
