import { Box, Circle, Heading, HStack, Stack, Text } from '@chakra-ui/react';
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
        <Stack spacing="2">
          {date && readingTime && (
            <Text fontSize="2xl" fontWeight="bold">
              <span>{date}</span> — <span>{readingTime}</span>
            </Text>
          )}
        </Stack>

        <Stack spacing="8" mt="10">
          <Heading
            color="brown.600"
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

        <HStack spacing="10" paddingLeft="6" mt="16">
          <Circle
            size="5rem"
            rounded="full"
            borderWidth="5px"
            borderColor="brown.600"
            overflow="hidden"
          >
            <Image
              priority
              alt="Segun Adebayo"
              src="/static/images/segun-adebayo-headshot.jpg"
              layout="fixed"
              width="80"
              height="80"
              objectFit="contain"
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
          bg="brown.600"
          px="6"
          py="2"
        >
          https://adebayosegun.com
        </Box>
      </Box>
    </>
  );
}
