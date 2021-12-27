import { allTestimonials } from '.contentlayer/data';
import {
  Avatar,
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
} from '@chakra-ui/react';
import ChakraLogo from 'components/chakra-logo';
import GithubStarIcon from 'components/github-star';
import { AboveTheFoldGradient, SpanGradient } from 'components/gradients';
import {
  EmailIcon,
  FileIcon,
  FullLinkedInLogo,
  LinkedInIcon,
  TwitterIcon,
} from 'components/social-icons';
import TestimonialCard from 'components/testimonial.card';
import chunk from 'lib/chunk';
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

function LinkItem({ icon, children, href }) {
  return (
    <HStack as="a" href={href} rel="noopener" target="_blank" spacing="3">
      <Icon aria-hidden as={icon} fontSize="4xl" color="#FEB48C" />
      <Text
        fontSize="lg"
        textDecoration="underline"
        textDecorationThickness="1px"
        textUnderlineOffset="3px"
      >
        {children}
      </Text>
    </HStack>
  );
}

export default function HomePage() {
  return (
    <Box bg="#000" color="white" minH="100vh">
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
            fontWeight="bold"
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

        <Flex py="100px" justify="space-between">
          <Box maxW="560px">
            <Circle size="95px" float="left" mr="6" overflow="hidden">
              <Image
                alt="Segun adebayo"
                src="/static/images/segun-adebayo-headshot.jpg"
                layout="fixed"
                width="95px"
                height="95px"
              />
            </Circle>
            <Text
              fontFamily="heading"
              lineHeight="1"
              fontSize="100px"
              letterSpacing="-0.04em"
            >
              I design{' '}
              <Box as="span" color="#FEB48C">
                component systems
              </Box>
            </Text>
          </Box>
          <Box maxW="440px" mt="4">
            <Text fontSize="2xl">
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
          <SimpleGrid columns={2} spacing="6">
            {chunk(allTestimonials, 2).map((testimonials, index) => (
              <Stack key={index} spacing="6">
                {testimonials.map((data) => (
                  <TestimonialCard key={data.name} data={data} />
                ))}
              </Stack>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
}
