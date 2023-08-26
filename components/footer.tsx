import { Box, Heading, HStack, Text } from '@chakra-ui/react';
import siteConfig from 'site.config';
import LinkItem from './link-item';
import { EmailIcon, GithubIcon, LinkedInIcon } from './social-icons';

export default function Footer() {
  return (
    <Box as="footer" position="relative" paddingY="20">
      <Box maxWidth="6xl" marginX="auto" paddingX="6">
        <Box>
          <Heading marginBottom="6" size="lg">
            Segun Adebayo
          </Heading>
          <Text fontSize="lg">
            Passionate UI engineer looking to bridge the gap between design and code
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

        <Text marginTop="20" opacity="0.7">
          All rights reserved &copy; Segun Adebayo {new Date().getFullYear()}
        </Text>
      </Box>
    </Box>
  );
}
