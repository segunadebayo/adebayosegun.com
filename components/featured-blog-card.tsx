import { Blog } from 'contentlayer/generated'
import { Box, Flex, Heading, HStack, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'
import formatDate from 'lib/format-date'
import Image from 'next/image'
import Link from 'next/link'
import ViewMore from './view-more'

type Field = 'publishedAt' | 'readingTime' | 'description' | 'title' | 'image' | 'slug'

export type BlogCardProps = {
  data: Pick<Blog, Field> | null
}

export default function FeaturedBlogCard(props: BlogCardProps) {
  const { data } = props

  if (!data) return null

  const { title, description, publishedAt, image, readingTime, slug } = data
  const date = formatDate(publishedAt)

  return (
    <LinkBox
      display='flex'
      gap='12'
      data-group
      padding={{ base: '6', md: '10' }}
      bg='gray.800'
      rounded='xl'
      shadow='highlight'
      flexDirection={{ base: 'column', md: 'row' }}
    >
      <Box
        width='full'
        maxWidth='320px'
        height='210px'
        rounded='lg'
        overflow='hidden'
        position='relative'
      >
        <Image
          src={image}
          alt={title}
          width={320}
          height={210}
          priority
          style={{ objectFit: 'cover', height: '100%' }}
        />
      </Box>

      <Box flex='1'>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          align={{ md: 'center' }}
          gap={{ base: '2', md: '5' }}
          fontSize='sm'
        >
          <Text fontWeight='semibold'>🌟 Featured article</Text>
          <HStack gap='2' color='brown.600'>
            <Box asChild>
              <time dateTime={date.iso}>{date.pretty}</time>
            </Box>
            <span>•</span>
            <Box>{readingTime.text}</Box>
          </HStack>
        </Flex>

        <Box>
          <Heading size='lg' fontWeight='semibold' marginTop='6'>
            {title}
          </Heading>

          <Text marginTop='4' marginBottom='8'>
            {description}
          </Text>

          <LinkOverlay as={Link} href={`/blog/${slug}`}>
            <ViewMore as='div'>Read the article</ViewMore>
          </LinkOverlay>
        </Box>
      </Box>
    </LinkBox>
  )
}
