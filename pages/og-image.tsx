import { Box, Circle, Heading, HStack, Stack, Text } from '@chakra-ui/react';
import { AboveTheFoldGradient } from 'components/gradients';
import HashTags from 'components/hash-tags';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Page() {
  const router = useRouter();

  const searchParams = new URLSearchParams(router.asPath.split(/\?/)[1]);

  const title = searchParams.get('title');
  const isLong = router.isReady && title?.length > 35;

  const date = searchParams.get('date');
  const readingTime = searchParams.get('readingTime');
  const tags = searchParams.get('tags')?.split(',') ?? [];

  return (
    <>
      <NextSeo noindex nofollow disableGooglebot />
      <Box position="relative" padding="20" color="gray.100" style={{ width: 1200, height: 630 }}>
        <AboveTheFoldGradient inset="0" />

        <Stack spacing="2">
          {date && readingTime && (
            <Text fontSize="2xl" fontWeight="bold" color="gray.400">
              <span>{date}</span> — <span>{readingTime}</span>
            </Text>
          )}
        </Stack>

        <Stack spacing="8" mt="10">
          <Heading
            color="sage.base"
            as="h1"
            size="4xl"
            minHeight="10rem"
            maxWidth={isLong ? undefined : '16ch'}
          >
            {title}
          </Heading>
          <HashTags
            spacing="5"
            data={tags}
            tagProps={{ fontSize: '3xl', fontWeight: 'semibold' }}
          />
        </Stack>

        <HStack spacing="14" paddingLeft="6" mt="16">
          <Circle
            overflow="hidden"
            outline="8px solid"
            outlineColor="sage.base"
            outlineOffset="12px"
          >
            <Image
              src="/static/images/segun-adebayo-headshot.jpg"
              alt="Segun Adebayo"
              width="80"
              height="80"
            />
          </Circle>
          <Text fontSize="3xl">
            Written by <b>Segun Adebayo</b>
          </Text>
        </HStack>

        <Box
          color="black"
          position="absolute"
          bottom="0"
          right="0"
          roundedTopLeft="2xl"
          fontWeight="semibold"
          fontSize="3xl"
          bg="sage.base"
          px="6"
          py="2"
        >
          https://adebayosegun.com
        </Box>
      </Box>
    </>
  );
}
