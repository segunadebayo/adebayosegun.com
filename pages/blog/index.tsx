import { Box, Heading, Text, Wrap } from '@chakra-ui/react';
import CategoryTag from 'components/category-tag';
import Container from 'components/container';
import SearchInput from 'components/search-input';
import { getCategories, toKebabCase, toSentenceCase } from 'lib/blog-utils';

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
      </Box>
    </Container>
  );
}
