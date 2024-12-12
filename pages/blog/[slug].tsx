import { Box, Circle, Flex, HStack, Heading, Text, chakra } from '@chakra-ui/react'
import AuthorProfile from 'components/author-profile'
import Container from 'components/container'
import HashTags from 'components/hash-tags'
import LinkItem from 'components/link-item'
import MDXComponents from 'components/mdx-components'
import { BlogIcon } from 'components/nav-icons'
import SEO from 'components/seo'
import { TwitterIcon } from 'components/social-icons'
import SubscribeForm from 'components/subscribe-form'
import { Blog, allBlogs } from 'contentlayer/generated'
import formatDate from 'lib/format-date'
import { getAbsoluteURL } from 'lib/router-utils'
import type { GetStaticPaths, GetStaticProps } from 'next'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Image from 'next/image'

export default function BlogPage({ blog, ogImageUrl }: { blog: Blog; ogImageUrl: string }) {
  const Component = useMDXComponent(blog.body.code)
  const date = formatDate(blog.publishedAt)

  return (
    <Container>
      <SEO
        image={ogImageUrl}
        title={blog.title}
        description={blog.description}
        post={{ date: date.iso, tags: blog.tags }}
      />
      <Box maxWidth='4xl' marginX='auto' paddingTop='12' paddingBottom='8rem'>
        <article>
          <Box marginBottom='6'>
            <Heading size='2xl' as='h1' marginBottom='8' color='white'>
              {blog.title}
            </Heading>

            <HashTags data={blog.tags} />

            <Flex
              direction={{ base: 'column-reverse', md: 'row' }}
              gap='4'
              justify='space-between'
              marginTop={{ base: '4', md: '8' }}
            >
              <HStack gap='3'>
                <Circle overflow='hidden'>
                  <Image
                    alt='Segun Adebayo'
                    src='https://vercel.com/api/www/avatar/6ad338204b00eabaea90981779d3835976b53833?s=64'
                    width={32}
                    height={32}
                  />
                </Circle>
                <Text fontWeight='medium'>Segun Adebayo</Text>
              </HStack>

              <HStack color='brown.600'>
                <chakra.span>{blog.readingTime.text}</chakra.span>
                <span aria-hidden>•</span>
                <time dateTime={date.iso}>{date.pretty}</time>
              </HStack>
            </Flex>
          </Box>

          <Box
            position='relative'
            height='400px'
            rounded='lg'
            overflow='hidden'
            marginTop='10'
            marginBottom='16'
          >
            <Image src={blog.image} alt={blog.title} fill style={{ objectFit: 'cover' }} priority />
          </Box>

          <Box
            css={{
              color: 'gray.300',
              lineHeight: 'taller',
              '& p + p': {
                marginY: '1.25em',
              },
            }}
          >
            <Component components={MDXComponents} />
          </Box>
        </article>

        <Flex justify='space-between' my='20'>
          <LinkItem href={blog.tweetUrl} icon={TwitterIcon}>
            Tweet this article
          </LinkItem>
          <LinkItem href={blog.editUrl} icon={BlogIcon}>
            Edit on github
          </LinkItem>
        </Flex>

        <Box as='hr' borderColor='whiteAlpha.200' mt='3rem' />

        <SubscribeForm />

        <Box as='hr' borderColor='whiteAlpha.200' mt='3rem' mb='9rem' />

        <AuthorProfile />
      </Box>
    </Container>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: allBlogs.map((blog) => ({ params: { slug: blog.slug } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const blog = allBlogs.find((blog) => blog.slug === params.slug)

  const searchParams = new URLSearchParams()
  searchParams.set('title', blog.title)
  searchParams.set('tags', blog.tags.join(','))
  searchParams.set('date', formatDate(blog.publishedAt).pretty)
  searchParams.set('readingTime', blog.readingTime.text)
  const ogImageUrl = getAbsoluteURL(`/api/open-graph-image?${searchParams.toString()}`)

  return { props: { blog, ogImageUrl } }
}
