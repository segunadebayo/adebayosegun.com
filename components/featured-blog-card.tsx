import { Blog } from '.contentlayer/types';
import { Box, Flex, Heading, HStack, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';
import formatDate from 'lib/format-date';
import Image from 'next/image';
import Link from 'next/link';
import ViewMore from './view-more';

export type BlogCardProps = {
  data: Pick<
    Blog,
    'publishedAt' | 'readingTime' | 'categories' | 'description' | 'title' | 'image' | 'slug'
  >;
};

export default function FeaturedBlogCard(props: BlogCardProps) {
  const { data } = props;
  const { title, description, publishedAt, image, categories, readingTime, slug } = data;
  const date = formatDate(publishedAt);

  return (
    <LinkBox
      display="flex"
      gap="12"
      data-group
      padding={{ base: '6', md: '10' }}
      bg="dustAlpha.darker"
      rounded="xl"
      flexDirection={{ base: 'column', md: 'row' }}
    >
      <Box
        width="full"
        maxWidth="320px"
        height="210px"
        rounded="lg"
        overflow="hidden"
        position="relative"
      >
        <Image src={image} alt={title} layout="fill" priority objectFit="cover" />
      </Box>

      <Box flex="1">
        <Flex
          direction={{ base: 'column', md: 'row' }}
          align={{ md: 'center' }}
          gap={{ base: '2', md: '5' }}
          fontSize="sm"
        >
          <Text fontWeight="semibold">🌟 Featured article</Text>
          <HStack spacing="2" color="sage.base">
            <Box as="time" dateTime={date.iso}>
              {date.pretty}
            </Box>
            <span>•</span>
            <Box>{readingTime.text}</Box>
          </HStack>
        </Flex>

        <Box>
          <Heading size="lg" fontWeight="semibold" marginTop="6">
            {title}
          </Heading>

          <Text marginTop="4" marginBottom="8">
            {description}
          </Text>

          <Link href={`/blog/${slug}`} passHref>
            <LinkOverlay>
              <ViewMore as="div">Read the article</ViewMore>
            </LinkOverlay>
          </Link>
        </Box>
      </Box>
    </LinkBox>
  );
}
