import { allBlogs } from '.contentlayer/data';
import { Box, Heading, SimpleGrid, Text, Wrap } from '@chakra-ui/react';
import { BlogCard } from 'components/blog-card';
import TagCheckbox from 'components/tag-checkbox';
import Container from 'components/container';
import FeaturedBlogCard from 'components/featured-blog-card';
import SearchInput from 'components/search-input';
import { getBlogCategories } from 'lib/contentlayer-utils';
import { toKebabCase } from 'lib/string-utils';

export default function Page() {
  return (
    <Container>
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
          <SearchInput />
        </Box>

        <Wrap mt="5" spacing="3">
          {getBlogCategories().map((category) => (
            <TagCheckbox key={category} value={toKebabCase(category)}>
              {category}
            </TagCheckbox>
          ))}
        </Wrap>

        <Box marginTop="6rem">
          <FeaturedBlogCard data={allBlogs[0]} />
          <SimpleGrid columns={{ base: 1, md: 3 }} mt="4rem" spacing="10">
            {allBlogs.map((blog) => (
              <BlogCard key={blog.title} data={blog} />
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </Container>
  );
}
