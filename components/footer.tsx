import {
  Box,
  Flex,
  GridItem,
  Heading,
  HStack,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import siteConfig from 'site.config';
import { FooterGradient } from './gradients';
import LinkItem from './link-item';
import { EmailIcon, GithubIcon, LinkedInIcon } from './social-icons';

function FooterLink({ href, children }) {
  return (
    <Link href={href} passHref>
      <Box as="a">{children}</Box>
    </Link>
  );
}

export default function Footer() {
  return (
    <Box as="footer" position="relative" py="80px">
      <FooterGradient />
      <Box maxW="1080px" mx="auto" px="6">
        <SimpleGrid columns={{ base: 4, md: 12 }} spacing="16">
          <GridItem colSpan={6}>
            <Box>
              <Heading mb="6" size="lg">
                Segun Adebayo
              </Heading>
              <Text fontSize="lg">
                Passionate UI engineer looking bridge the gap between design and
                code
              </Text>
            </Box>
            <HStack mt="9" spacing="10">
              <LinkItem href={siteConfig.profiles.linkedin} icon={LinkedInIcon}>
                LinkedIn
              </LinkItem>
              <LinkItem href={siteConfig.profiles.github} icon={GithubIcon}>
                GitHub
              </LinkItem>
              <LinkItem href={siteConfig.profiles.email} icon={EmailIcon}>
                Email
              </LinkItem>
            </HStack>
          </GridItem>
          <GridItem colSpan={3}>
            <Heading as="h2" mb="6" size="lg">
              Contact
            </Heading>
            <Flex direction={'column'} gap="16px">
              <FooterLink href={siteConfig.profiles.email}>
                Email Segun
              </FooterLink>
              <FooterLink href="#">Call Segun</FooterLink>
              <FooterLink href={siteConfig.profiles.email}>
                Join Discord
              </FooterLink>
            </Flex>
          </GridItem>
          <GridItem colSpan={3}>
            <Heading as="h2" mb="6" size="lg">
              General
            </Heading>
            <Flex direction={'column'} gap="16px">
              <FooterLink href={'/mission'}>My Mission</FooterLink>
              <FooterLink href={'/story'}>My Story</FooterLink>
              <FooterLink href={'/family'}>My Family</FooterLink>
            </Flex>
          </GridItem>
        </SimpleGrid>
        <Text mt="72px">
          All rights reserved &copy; Segun Adebayo {new Date().getFullYear()}
        </Text>
      </Box>
    </Box>
  );
}
