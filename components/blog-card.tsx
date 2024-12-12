import { Blog } from 'contentlayer/generated'
import { Box, Heading, HStack, LinkBox, LinkOverlay } from '@chakra-ui/react'
import formatDate from 'lib/format-date'
import Image from 'next/image'
import Link from 'next/link'

type Field = 'publishedAt' | 'readingTime' | 'description' | 'title' | 'image' | 'slug'

type BlogCardProps = {
  data: Pick<Blog, Field>
}

export function BlogCard(props: BlogCardProps) {
  const { data } = props
  const { title, publishedAt, image, readingTime, slug } = data
  const date = formatDate(publishedAt)

  return (
    <LinkBox>
      <Box height='210px' rounded='lg' overflow='hidden' position='relative'>
        <Image src={image} alt={title} width={340} height={210} style={{ objectFit: 'cover' }} />
      </Box>

      <Box flex='1' mt='5'>
        <HStack gap='5' fontSize='sm'>
          <HStack gap='2' color='brown.600'>
            <Box asChild>
              <time dateTime={date.iso}>{date.pretty}</time>
            </Box>
            <span aria-hidden>•</span>
            <Box>{readingTime.text}</Box>
          </HStack>
        </HStack>

        <Heading size='lg' fontWeight='semibold' marginY='4'>
          <LinkOverlay as={Link} href={`/blog/${slug}`}>
            {title}
          </LinkOverlay>
        </Heading>
      </Box>
    </LinkBox>
  )
}
