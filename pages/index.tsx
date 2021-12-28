import { allProjects, allTalks, allTestimonials } from '.contentlayer/data';
import {
  Box,
  Circle,
  Flex,
  Heading,
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
import Footer from 'components/footer';
import GithubStarIcon from 'components/github-star';
import {
  AboveTheFoldGradient,
  SpanGradient,
  StartSideGradient,
} from 'components/gradients';
import LinkItem from 'components/link-item';
import ProjectCard from 'components/project-card';
import {
  EmailIcon,
  FileIcon,
  LinkedInIcon,
  TwitterIcon,
} from 'components/social-icons';
import SubscribeForm from 'components/subscribe-form';
import TalkCard from 'components/talk-card';
import TestimonialCard from 'components/testimonial.card';
import ViewMore from 'components/view-more';
import chunk from 'lib/chunk';
import sortByPublishedDate from 'lib/sort';
import tools from 'lib/tools';
import Image from 'next/image';
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

export default function HomePage() {
  return (
    <Box>
      {/* <Navbar /> */}
      <Box maxW="1080px" mx="auto" pt="10" px="24px">
        <AboveTheFoldGradient />
        <SpanGradient />
        <Flex direction="column" align="center" position="relative" py="100px">
          <Heading
            as="h1"
            width="full"
            maxW={{ md: '69vw' }}
            fontFamily="heading"
            fontSize={{ base: '3.5rem', md: 'max(8vw, 4rem)' }}
            letterSpacing={{ base: '-2px', md: '-4px' }}
            lineHeight="1"
            marginBottom="56px"
            fontWeight="normal"
            userSelect="none"
          >
            <span>Segun Adebayo</span>
            <Box
              as="span"
              color="#FEB48C"
              display="block"
              textAlign={{ md: 'end' }}
            >
              — ui engineer
            </Box>
            <Box as="span" color="#FEB48C" display="block">
              & product designer
            </Box>
          </Heading>
          <Text
            align={{ base: 'start', md: 'center' }}
            fontFamily="body"
            fontWeight="medium"
            maxW="640px"
            fontSize={{ base: 'lg', md: '2xl' }}
          >
            I'm passionate about{' '}
            <span role="img" aria-label="design system">
              🎨
            </span>{' '}
            design systems,{' '}
            <span role="img" aria-label="accessibility">
              ♿️
            </span>{' '}
            accessibility,{' '}
            <span role="img" aria-label="state machine">
              ⚙️
            </span>{' '}
            state machines, and{' '}
            <span role="img" aria-label="love">
              😍{' '}
            </span>{' '}
            user experience
          </Text>
          <Box mt={{ base: '8', md: '14' }} width="full">
            <Flex
              direction={{ base: 'column', md: 'row' }}
              justify={{ base: 'flex-start', md: 'center' }}
              gap={{ base: '5', md: '10' }}
            >
              <AchievementItem icon={GithubStarIcon}>
                Github Star
              </AchievementItem>
              <AchievementItem icon={ChakraLogo}>
                Creator, Chakra UI
              </AchievementItem>
            </Flex>
          </Box>
        </Flex>

        <Flex
          py="100px"
          justify="space-between"
          direction={{ base: 'column', md: 'row' }}
        >
          <Box maxW="560px">
            <Circle
              position={'relative'}
              size={{ base: '50px', md: '100px' }}
              float="left"
              mr={{ base: '3', md: '6' }}
              overflow="hidden"
            >
              <Image
                alt="Segun adebayo"
                src="/static/images/segun-adebayo-headshot.jpg"
                layout="fill"
                objectFit="cover"
                width="100%"
              />
            </Circle>
            <Text
              fontFamily="heading"
              lineHeight="1"
              fontSize={{ base: '50px', md: '100px' }}
              letterSpacing="-0.04em"
            >
              I design{' '}
              <Box as="span" color="#FEB48C">
                component systems
              </Box>
            </Text>
          </Box>
          <Box maxW={{ md: '440px' }} mt="4">
            <Text fontSize={{ base: 'lg', md: '2xl' }}>
              An engineer with a strong design background, specializing in
              design systems, accessibility and interface design for digital
              products since 2016
            </Text>
            <SimpleGrid columns={2} mt="10" spacing="10" maxW="256px">
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

        <Box as="section" aria-labelledby="heading" py="100px">
          <VisuallyHidden>Recommendations</VisuallyHidden>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing="6">
            {chunk(allTestimonials, 2).map((testimonials, index) => (
              <Stack key={index} spacing="6">
                {testimonials.map((data) => (
                  <TestimonialCard key={data.name} data={data} />
                ))}
              </Stack>
            ))}
          </SimpleGrid>
        </Box>

        <Box as="section" py="100px">
          <Heading size="3xl" letterSpacing="-0.04em">
            Featured Projects
          </Heading>
          <Box mt="100px">
            <Stack spacing="20">
              {allProjects.map((project) => (
                <ProjectCard key={project.title} data={project} />
              ))}
            </Stack>
          </Box>
        </Box>

        <Box as="section" py="100px" position="relative">
          <StartSideGradient />
          <Heading size="3xl" letterSpacing="-0.04em">
            Featured Talks
          </Heading>
          <Box my="40px">
            <Flex direction={'column'} gap="6">
              {allTalks
                .filter((a) => a.featured)
                .sort(sortByPublishedDate)
                .map((talk) => (
                  <TalkCard key={talk.title} data={talk} />
                ))}
            </Flex>
          </Box>
          <ViewMore>View all Talks</ViewMore>
        </Box>

        <Box as="section" py="100px">
          <Box mb="16">
            <Heading size="3xl" letterSpacing="-0.04em">
              Tools
            </Heading>
            <Text mt="5" fontSize="lg" maxW={{ md: '720px' }}>
              Over the years, I had the opportunity to work with various
              software, tools and frameworks. Here are some of them:
            </Text>
          </Box>
          <Wrap spacing="10">
            {tools.map((tool) => (
              <WrapItem
                fontFamily={'heading'}
                fontSize={'3xl'}
                color="#FEB48C"
                key={tool}
              >
                {tool}
              </WrapItem>
            ))}
          </Wrap>
        </Box>
        <Box as="hr" borderColor="whiteAlpha.300" />
        <SubscribeForm />
        <Box as="hr" borderColor="whiteAlpha.300" />
      </Box>
      <Footer />
    </Box>
  );
}
