import { allBlogs } from '.contentlayer/data';
import { Box, Heading, SimpleGrid, Text, Wrap } from '@chakra-ui/react';
import { BlogCard } from 'components/blog-card';
import Container from 'components/container';
import FeaturedBlogCard from 'components/featured-blog-card';
import SearchInput from 'components/search-input';
import SEO from 'components/seo';
import TagCheckbox from 'components/tag-checkbox';
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
          <Heading size="3xl" marginBottom="6">
            Sage's Blog
          </Heading>
          <Text fontSize="lg" maxW="560px">
            I've been writing online since 2014, mostly about web development and tech careers.
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

        <Wrap mt="5" spacing="3">
          {search.allCategories.map((category) => (
            <TagCheckbox
              key={category}
              checked={search.filters.includes(category)}
              value={category}
              onChange={(e) => {
                if (e.target.checked) search.addCategory(category);
                else search.removeCategory(category);
              }}
            >
              {category}
            </TagCheckbox>
          ))}
        </Wrap>

        <Box marginTop="6rem">
          {search.hasFilter || search.hasQuery ? null : <FeaturedBlogCard data={allBlogs[0]} />}
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
