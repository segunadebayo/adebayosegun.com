import { Blog } from '.contentlayer/types';
import { Box, Heading, HStack, LinkBox, LinkOverlay } from '@chakra-ui/react';
import formatDate from 'lib/format-date';
import Image from 'next/image';
import Link from 'next/link';

type Field = 'publishedAt' | 'readingTime' | 'description' | 'title' | 'image' | 'slug';

type BlogCardProps = {
  data: Pick<Blog, Field>;
};

export function BlogCard(props: BlogCardProps) {
  const { data } = props;
  const { title, publishedAt, image, readingTime, slug } = data;
  const date = formatDate(publishedAt);

  return (
    <LinkBox>
      <Box height="210px" rounded="lg" overflow="hidden" position="relative">
        <Image src={image} alt={title} width="340" height="210" objectFit="cover" />
      </Box>

      <Box flex="1" mt="5">
        <HStack spacing="5" fontSize="sm">
          <HStack spacing="2" color="sage.base">
            <Box as="time" dateTime={date.iso}>
              {date.pretty}
            </Box>
            <span aria-hidden>•</span>
            <Box>{readingTime.text}</Box>
          </HStack>
        </HStack>

        <Heading size="lg" fontWeight="semibold" marginY="4">
          <Link href={`/blog/${slug}`} passHref>
            <LinkOverlay>{title}</LinkOverlay>
          </Link>
        </Heading>
      </Box>
    </LinkBox>
  );
}
