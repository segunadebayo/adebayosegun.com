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
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

type TalkCardProps = {
  data: Talk;
};

export default function TalkCard(props: TalkCardProps) {
  const { data: talk } = props;

  return (
    <LinkBox
      display={'flex'}
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
      <Stack spacing="4" mt="2">
        <Heading size="lg">
          <Link passHref href={talk.url}>
            <LinkOverlay isExternal>{talk.title}</LinkOverlay>
          </Link>
        </Heading>
        <Text maxWidth={{ md: '600px' }}>{talk.description}</Text>

        <HStack spacing="10">
          <Text casing="uppercase" fontWeight="bold" fontSize="sm" letterSpacing="0.05em">
            <Box as="span" color="#FEB48C" marginRight="2">
              Host:
            </Box>
            {talk.host}
          </Text>
          <DarkMode>
            <Badge color="#FEB48C" colorScheme={'orange'}>
              {talk.type}
            </Badge>
          </DarkMode>
        </HStack>
      </Stack>
    </LinkBox>
  );
}

function PlayIcon(props) {
  return (
    <svg width="75" height="75" viewBox="0 0 75 75" {...props}>
      <path
        d="M37.5 0C16.8219 0 0 16.8219 0 37.5C0 58.1781 16.8219 75 37.5 75C58.1781 75 75 58.1781 75 37.5C75 16.8219 58.1781 0 37.5 0ZM28.125 53.125V21.875L53.125 37.5L28.125 53.125Z"
        fill="#FFB992"
      />
    </svg>
  );
}

function TalkCoverImage(props) {
  const { src, alt } = props;
  return (
    <Box position={'relative'}>
      <Box rounded="lg" overflow={'hidden'} width="300px" height="200px">
        <Image alt={alt} src={src} objectFit="cover" layout="fill" />
      </Box>
      <AbsoluteCenter display={'none'} _groupHover={{ display: 'block' }}>
        <Icon as={PlayIcon} aria-hidden fontSize="64px" />
      </AbsoluteCenter>
    </Box>
  );
}
