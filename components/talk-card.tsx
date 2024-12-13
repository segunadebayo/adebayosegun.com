import { Talk } from 'contentlayer/generated';
import {
  Badge,
  Box,
  Heading,
  HStack,
  LinkBox,
  LinkOverlay,
  Span,
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
      className="group"
      gap="2rem"
      flexDirection={{ base: 'column', md: 'row' }}
      transition="background 0.1s ease-in-out"
    >
      <HoverEffect />
      <Box>
        <TalkCoverImage src={talk.image} alt={talk.title} />
      </Box>

      <Stack gap="4" marginTop="2" zIndex="1">
        <Heading as="h3" size="lg">
          <LinkOverlay as={Link} href={talk.url} target="_blank">
            {talk.title}
          </LinkOverlay>
        </Heading>

        <Text maxWidth={{ md: '37.5rem' }}>{talk.description}</Text>

        <HStack gap="10" className="dark">
          <Text textTransform="uppercase" fontWeight="bold" fontSize="sm" letterSpacing="wider">
            <Span color="brown.600" marginRight="2">
              Host:
            </Span>
            {talk.host}
          </Text>
          <Badge color="brown.600" colorPalette="orange">
            {talk.type}
          </Badge>
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
      <Image alt={alt} src={src} fill style={{ objectFit: 'cover' }} priority />
    </Box>
  );
}
