import {
  Box,
  Circle,
  Flex,
  Heading,
  HeadingProps,
  HStack,
  Icon,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import ChakraLogo from 'components/chakra-logo';
import Container from 'components/container';
import Emoji from 'components/emoji';
import GithubStarIcon from 'components/github-star';
import LinkItem from 'components/link-item';
import ProjectCard from 'components/project-card';
import { EmailIcon, FileIcon, LinkedInIcon, TwitterIcon } from 'components/social-icons';
import SubscribeForm from 'components/subscribe-form';
import TalkCard from 'components/talk-card';
import TestimonialCard from 'components/testimonial-card';
import ViewMore from 'components/view-more';
import chunk from 'lib/chunk';
import {
  allFeaturedProjects,
  allFeaturedTalks,
  allFeaturedTestimonials,
} from 'lib/contentlayer-utils';
import sortByPublishedDate from 'lib/sort';
import tools from 'lib/tools';
import Image from 'next/image';
import Link from 'next/link';
import siteConfig from 'site.config';

function AchievementItem({ icon, children }) {
  return (
    <HStack spacing="3">
      <Icon as={icon} fontSize="4xl" />
      <Text fontFamily="heading" fontSize="xl">
        {children}
      </Text>
    </HStack>
  );
}

function MainHeading(props: HeadingProps) {
  return (
    <Heading
      as="h1"
      width="full"
      fontFamily="heading"
      fontSize={{ base: '4rem', md: '7rem' }}
      letterSpacing="tight"
      lineHeight="1"
      userSelect="none"
      color="white"
      marginBottom="4"
      {...props}
    />
  );
}

export default function HomePage() {
  return (
    <Container>
      {/* Segun Adebayo - ui engineer & product designer  */}
      <Flex direction="column" paddingY="24">
        <MainHeading>Segun Adebayo</MainHeading>
        <Text
          color="brown.600"
          display="block"
          fontSize="5xl"
          fontFamily="heading"
          fontWeight="bold"
          lineHeight="1.2"
        >
          UI engineer &amp; product designer
        </Text>

        {/* I'm passionate about... */}
        <Text
          marginTop="14"
          fontFamily="body"
          maxWidth="40rem"
          fontSize={{ base: 'lg', md: '2xl' }}
        >
          I'm passionate about <Emoji label="design system">🎨</Emoji> design systems,{' '}
          <Emoji label="accessibility">♿️</Emoji> accessibility,{' '}
          <Emoji label="state machine">⚙️</Emoji> state machines, and{' '}
          <Emoji label="love">😍 </Emoji> user experience
        </Text>

        {/* Github star and Chakra brag */}
        <Box marginTop={{ base: '8', md: '14' }} width="full">
          <Flex direction={{ base: 'column', md: 'row' }} gap={{ base: '5', md: '10' }}>
            <AchievementItem icon={GithubStarIcon}>Github Star</AchievementItem>
            <AchievementItem icon={ChakraLogo}>Creator, Chakra UI</AchievementItem>
          </Flex>
        </Box>
      </Flex>

      {/* I design component systems... */}
      <Flex
        paddingY="vGutter"
        gap={{ base: '5', lg: '20' }}
        justify="space-between"
        direction={{ base: 'column', lg: 'row' }}
      >
        <Box maxWidth={{ lg: '36rem' }}>
          {/* Circular Headshot */}
          <Circle
            display={{ base: 'none', lg: 'flex' }}
            position={'relative'}
            size="6.25rem"
            float="left"
            marginRight="6"
            overflow="hidden"
          >
            <Image
              alt="Segun adebayo"
              src="/static/images/segun-adebayo-headshot.jpg"
              fill
              style={{ objectFit: 'cover' }}
            />
          </Circle>

          <Heading
            lineHeight="1"
            fontSize={{ base: '3rem', md: '5rem', lg: '6.25rem' }}
            letterSpacing="tight"
          >
            I design{' '}
            <Box as="span" color="brown.600">
              component systems
            </Box>
          </Heading>
        </Box>

        <Box maxWidth={{ lg: '27.5rem' }} marginTop="4">
          <Text fontSize={{ base: 'lg', md: '2xl' }}>
            An engineer with a strong design background, specializing in design systems,
            accessibility and interface design for digital products
          </Text>

          {/* Profile links */}
          <SimpleGrid columns={2} marginTop="10" spacing="10" maxWidth="16rem">
            <LinkItem icon={LinkedInIcon} href={siteConfig.profiles.linkedin}>
              LinkedIn
            </LinkItem>
            <LinkItem icon={TwitterIcon} href={siteConfig.profiles.twitter}>
              Twitter
            </LinkItem>
            <LinkItem icon={EmailIcon} href={siteConfig.profiles.email}>
              Email
            </LinkItem>
            <LinkItem icon={FileIcon} href={siteConfig.profiles.linkedin}>
              Resume
            </LinkItem>
          </SimpleGrid>
        </Box>
      </Flex>

      {/* Testimonials */}
      <Box as="section" aria-labelledby="heading" py="vGutter">
        <VisuallyHidden>Recommendations</VisuallyHidden>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing="6">
          {chunk(allFeaturedTestimonials, 2).map((testimonials, index) => (
            <Stack key={index} spacing="6">
              {testimonials.map((data) => (
                <TestimonialCard key={data.name} data={data} />
              ))}
            </Stack>
          ))}
        </SimpleGrid>
      </Box>

      {/* Featured projects */}
      <Box as="section" py="vGutter">
        <Heading size="3xl" letterSpacing="tight">
          Featured Projects
        </Heading>
        <Box marginTop="vGutter">
          <Stack spacing="20">
            {allFeaturedProjects.map((project) => (
              <ProjectCard key={project.title} data={project} />
            ))}
          </Stack>
        </Box>
      </Box>

      {/* Featured Talks */}
      <Box as="section" py="vGutter" position="relative">
        <Heading size="3xl" letterSpacing="tight" position="relative">
          Featured Talks
        </Heading>
        <Box marginTop="20" marginBottom="10">
          <Flex direction="column" gap="20">
            {allFeaturedTalks.sort(sortByPublishedDate).map((talk) => (
              <TalkCard key={talk.title} data={talk} />
            ))}
          </Flex>
        </Box>

        <Link href="/talks">
          <ViewMore as="div">View all Talks</ViewMore>
        </Link>
      </Box>

      {/* Tools & Softwares */}
      <Box as="section" py="vGutter">
        <Box marginBottom="16">
          <Heading size="3xl" letterSpacing="tight">
            Tools &amp; Softwares
          </Heading>
          <Text marginTop="5" fontSize="lg" maxWidth={{ md: '45rem' }}>
            Over the years, I had the opportunity to work with various software, tools and
            frameworks. Here are some of them:
          </Text>
        </Box>

        {/* ToolList */}
        <Wrap spacing="10">
          {tools.map((tool) => (
            <WrapItem fontFamily="heading" fontSize="3xl" color="brown.600" key={tool}>
              {tool}
            </WrapItem>
          ))}
        </Wrap>
      </Box>

      {/* Subscribe callout */}
      <Box as="hr" borderColor="whiteAlpha.300" />
      <SubscribeForm />
      <Box as="hr" borderColor="whiteAlpha.300" />
    </Container>
  );
}
