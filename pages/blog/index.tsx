import { allBlogs } from '.contentlayer/data';
import { Box, Heading, SimpleGrid, Text, Wrap } from '@chakra-ui/react';
import { BlogCard } from 'components/blog-card';
import CategoryTag from 'components/category-tag';
import Container from 'components/container';
import FeaturedBlogCard from 'components/featured-blog-card';
import SearchInput from 'components/search-input';
import { getCategories, toKebabCase } from 'lib/blog-utils';

export default function Page() {
  return (
    <Container>
      <Box py="vGutter">
        <Box>
          <Heading marginBottom="6">Sage's Blog</Heading>
          <Text fontSize="lg" maxW="560px">
            I've been writing online since 2014, mostly about web development and tech careers.
          </Text>
        </Box>

        <Box maxWidth="xl" mt="8">
          <SearchInput />
        </Box>

        <Wrap mt="5" spacing="3">
          {getCategories().map((category) => (
            <CategoryTag key={category} value={toKebabCase(category)}>
              {category}
            </CategoryTag>
          ))}
        </Wrap>

        <Box marginTop="10rem">
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
