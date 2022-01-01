import { Box, Flex, GridItem, Heading, HStack, SimpleGrid, Text } from '@chakra-ui/react';
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
    <Box as="footer" position="relative" paddingY="20">
      <FooterGradient />

      <Box maxWidth="6xl" marginX="auto" paddingX="6">
        <SimpleGrid columns={{ base: 4, md: 12 }} spacing="16">
          <GridItem colSpan={6}>
            <Box>
              <Heading marginBottom="6" size="lg">
                Segun Adebayo
              </Heading>
              <Text fontSize="lg">
                Passionate UI engineer looking bridge the gap between design and code
              </Text>
            </Box>

            <HStack marginTop="9" spacing={{ base: '8', md: '10' }}>
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
            <Heading as="h2" marginBottom="6" size="lg">
              Contact
            </Heading>
            <Flex direction="column" gap="4">
              <FooterLink href={siteConfig.profiles.email}>Email Segun</FooterLink>
              <FooterLink href="https://calendly.com/segunadebayo/meet">Chat with Segun</FooterLink>
              <FooterLink href={siteConfig.profiles.email}>Join Discord</FooterLink>
            </Flex>
          </GridItem>

          <GridItem colSpan={3}>
            <Heading as="h2" marginBottom="6" size="lg">
              General
            </Heading>
            <Flex direction="column" gap="4">
              <FooterLink href="/mission">My Mission</FooterLink>
              <FooterLink href="/story">My Story</FooterLink>
              <FooterLink href="/family">My Family</FooterLink>
            </Flex>
          </GridItem>
        </SimpleGrid>

        <Text marginTop="20">
          All rights reserved &copy; Segun Adebayo {new Date().getFullYear()}
        </Text>
      </Box>
    </Box>
  );
}
