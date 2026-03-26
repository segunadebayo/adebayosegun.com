import { Box, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import Container from 'components/container';
import LinkItem from 'components/link-item';
import SEO from 'components/seo';
import { EmailIcon, LinkedInIcon, TwitterIcon } from 'components/social-icons';
import siteConfig from 'site.config';

function ServiceCard({ title, children }: { title: string; children: string }) {
  return (
    <Box bg="gray.800" rounded="xl" padding="8" shadow="highlight">
      <Heading as="h3" size="md" color="brown.600" marginBottom="3">
        {title}
      </Heading>
      <Text lineHeight="tall">{children}</Text>
    </Box>
  );
}

export default function HirePage() {
  return (
    <Container>
      <SEO
        title="Hire Me"
        description="Work with Segun Adebayo on design systems, component libraries, and frontend architecture."
      />
      <Box py="vGutter">
        <Stack spacing="16">
          {/* Intro */}
          <Box>
            <Heading as="h1" size="3xl" letterSpacing="tight" marginBottom="6">
              Hire me (Sage)
            </Heading>
            <Text fontSize="xl" maxWidth="38rem" lineHeight="tall">
              I help companies build high-quality design systems, component libraries, and frontend
              architecture. I bring deep expertise in React, accessibility, and developer
              experience.
            </Text>
          </Box>

          {/* Get in touch */}
          <Stack spacing="4">
            <LinkItem icon={EmailIcon} href={siteConfig.profiles.email}>
              sage@adebayosegun.com
            </LinkItem>
            <LinkItem icon={LinkedInIcon} href={siteConfig.profiles.linkedin}>
              linkedin.com/in/thesegunadebayo
            </LinkItem>
            <LinkItem icon={TwitterIcon} href={siteConfig.profiles.twitter}>
              x.com/thesegunadebayo
            </LinkItem>
          </Stack>

          {/* Services */}
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing="6">
            <ServiceCard title="Consulting">
              Design system strategy, architecture reviews, and technical guidance.
            </ServiceCard>
            <ServiceCard title="Contract Work">
              Hands-on engineering for component libraries and frontend infrastructure.
            </ServiceCard>
            <ServiceCard title="Workshops">
              Team sessions on accessible components, design tokens, and state machines.
            </ServiceCard>
            <ServiceCard title="Advisory">
              Ongoing strategic input on design systems and developer experience.
            </ServiceCard>
          </SimpleGrid>
        </Stack>
      </Box>
    </Container>
  );
}
