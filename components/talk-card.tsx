import { Talk } from '.contentlayer/types';
import {
  AbsoluteCenter,
  Badge,
  Box,
  DarkMode,
  Heading,
  HStack,
  Icon,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
  useToken,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { SVGProps } from 'react';

type TalkCardProps = {
  data: Talk;
};

export default function TalkCard(props: TalkCardProps) {
  const { data: talk } = props;

  return (
    <LinkBox
      display="flex"
      data-group
      gap="2rem"
      flexDirection={{ base: 'column', md: 'row' }}
      _hover={{ bg: 'rgba(254, 180, 140, 0.11)' }}
      rounded="2xl"
      width={{ md: 'calc(100% + 2rem)' }}
      marginLeft={{ md: '-2rem' }}
      padding="2rem"
      transition="background 0.2s ease-in-out"
    >
      <Box>
        <TalkCoverImage src={talk.image} alt={talk.title} />
      </Box>

      <Stack spacing="4" marginTop="2">
        <Heading as="h3" size="lg">
          <Link passHref href={talk.url}>
            <LinkOverlay isExternal>{talk.title}</LinkOverlay>
          </Link>
        </Heading>

        <Text maxWidth={{ md: '37.5rem' }}>{talk.description}</Text>

        <HStack spacing="10">
          <Text casing="uppercase" fontWeight="bold" fontSize="sm" letterSpacing="wider">
            <Box as="span" color="sage.base" marginRight="2">
              Host:
            </Box>
            {talk.host}
          </Text>
          <DarkMode>
            <Badge color="sage.base" colorScheme="orange">
              {talk.type}
            </Badge>
          </DarkMode>
        </HStack>
      </Stack>
    </LinkBox>
  );
}

function PlayIcon(props: SVGProps<SVGSVGElement>) {
  const sageBase = useToken('colors', 'sage.base');
  return (
    <svg width="75" height="75" viewBox="0 0 75 75" {...props}>
      <path
        d="M37.5 0C16.8219 0 0 16.8219 0 37.5C0 58.1781 16.8219 75 37.5 75C58.1781 75 75 58.1781 75 37.5C75 16.8219 58.1781 0 37.5 0ZM28.125 53.125V21.875L53.125 37.5L28.125 53.125Z"
        fill={sageBase}
      />
    </svg>
  );
}

type TalkCoverImageProps = {
  src: string;
  alt: string;
};

function TalkCoverImage(props: TalkCoverImageProps) {
  const { src, alt } = props;
  return (
    <Box position="relative">
      <Box position="relative" rounded="lg" overflow="hidden" width="18.75rem" height="10.5rem">
        <Image alt={alt} src={src} objectFit="cover" layout="fill" priority />
      </Box>
      <AbsoluteCenter display="none" _groupHover={{ display: 'block' }}>
        <Icon as={PlayIcon} aria-hidden fontSize="6xl" />
      </AbsoluteCenter>
    </Box>
  );
}
