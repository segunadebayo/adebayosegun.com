import { Box, Circle, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Emoji from './emoji';

export default function AuthorProfile() {
  return (
    <Flex direction={{ base: 'column', md: 'row' }} gap={{ base: '4', md: '8' }}>
      <Circle size="80px" overflow="hidden">
        <Image
          alt="Segun Adebayo"
          src="/static/images/segun-adebayo-headshot.jpg"
          width={80}
          height={80}
        />
      </Circle>
      <Box>
        <Heading size="md">Written by Segun Adebayo (Sage)</Heading>
        <Text mt="4" lineHeight="taller">
          Sage is a Github Star <Emoji label="Github star">🌟</Emoji> and Design Engineer{' '}
          <Emoji label="Software developer">👨🏽‍💻</Emoji>. He is passionate about helping people build
          an accessible web faster. Sage is the author of Chakra UI, a React UI library for building
          accessible experiences.
        </Text>
      </Box>
    </Flex>
  );
}
