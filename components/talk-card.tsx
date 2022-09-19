import { Talk } from '.contentlayer/types';
import {
  Badge,
  Box,
  DarkMode,
  Heading,
  HStack,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

type TalkCardProps = {
  data: Talk;
};

function HoverEffect() {
  return (
    <Box
      zIndex={0}
      as="span"
      bg="gray.800"
      position="absolute"
      borderRadius={{ md: '2xl' }}
      insetX="-1.5rem"
      insetY="-1.5rem"
      transform="auto"
      scale="0.9"
      opacity="0"
      transition="0.15s cubic-bezier(.4,0,.2,1)"
      _groupHover={{
        opacity: 1,
        scale: '1',
      }}
    />
  );
}

export default function TalkCard(props: TalkCardProps) {
  const { data: talk } = props;

  return (
    <LinkBox
      position="relative"
      display="flex"
      data-group
      gap="2rem"
      flexDirection={{ base: 'column', md: 'row' }}
      transition="background 0.1s ease-in-out"
    >
      <HoverEffect />
      <Box>
        <TalkCoverImage src={talk.image} alt={talk.title} />
      </Box>

      <Stack spacing="4" marginTop="2" zIndex="1">
        <Heading as="h3" size="lg">
          <Link passHref href={talk.url}>
            <LinkOverlay isExternal>{talk.title}</LinkOverlay>
          </Link>
        </Heading>

        <Text maxWidth={{ md: '37.5rem' }}>{talk.description}</Text>

        <HStack spacing="10">
          <Text casing="uppercase" fontWeight="bold" fontSize="sm" letterSpacing="wider">
            <Box as="span" color="brown.600" marginRight="2">
              Host:
            </Box>
            {talk.host}
          </Text>
          <DarkMode>
            <Badge color="brown.600" colorScheme="orange">
              {talk.type}
            </Badge>
          </DarkMode>
        </HStack>
      </Stack>
    </LinkBox>
  );
}

type TalkCoverImageProps = {
  src: string;
  alt: string;
};

function TalkCoverImage(props: TalkCoverImageProps) {
  const { src, alt } = props;
  return (
    <Box position="relative" rounded="lg" overflow="hidden" width="18.75rem" height="10.5rem">
      <Image alt={alt} src={src} objectFit="cover" layout="fill" priority />
    </Box>
  );
}
