import { Blog } from '.contentlayer/types';
import { Box, Flex, Heading, HStack, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';
import formatDate from 'lib/format-date';
import Image from 'next/image';
import Link from 'next/link';
import ViewMore from './view-more';

type Field = 'publishedAt' | 'readingTime' | 'description' | 'title' | 'image' | 'slug';

export type BlogCardProps = {
  data: Pick<Blog, Field> | null;
};

export default function FeaturedBlogCard(props: BlogCardProps) {
  const { data } = props;

  if (!data) return null;

  const { title, description, publishedAt, image, readingTime, slug } = data;
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
        <Image src={image} alt={title} width="320px" height="210px" priority objectFit="cover" />
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
