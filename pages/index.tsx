import { Box, Flex, Heading, HStack, Text } from '@chakra-ui/react';
import ChakraLogo from 'components/chakra-logo';
import GithubStarIcon from 'components/github-star';

function SoftShadow() {
  return (
    <Box
      width="100%"
      height="920px"
      position="absolute"
      top="0"
      left="0"
      bgGradient="radial-gradient(53.09% 53.09% at 50% 37.57%, rgba(255, 129, 60, 0.4) 0%, rgba(18, 19, 24, 0) 100%);"
    />
  );
}

function AchievementItem({ icon, children }) {
  return (
    <HStack spacing="16px">
      {icon}
      <Text fontFamily="heading" fontSize="24px">
        {children}
      </Text>
    </HStack>
  );
}

export default function HomePage() {
  return (
    <Box bg="#000" color="white" minH="100vh">
      <Box maxW="1280px" mx="auto" pt="80px" px="24px">
        <SoftShadow />
        <Flex direction="column" align="center" position="relative">
          <Heading
            as="h1"
            fontFamily="heading"
            fontSize={'max(9vw, 4rem)'}
            letterSpacing={{ base: '-2px', md: '-4px' }}
            lineHeight="1"
            marginBottom="56px"
            fontWeight="bold"
            userSelect="none"
          >
            <span>Segun Adebayo</span>
            <Box as="span" color="#FEB48C" display="block" textAlign="end">
              — ui engineer
            </Box>
            <Box as="span" color="#FEB48C" display="block" textAlign="end">
              & product designer
            </Box>
          </Heading>
          <Text
            align="center"
            fontFamily="body"
            fontWeight="medium"
            maxW="640px"
            fontSize="24px"
          >
            I'm passionate about 🎨 design systems, ♿️ accessibility, ⚙️ state
            machines, and 😍 user experience
          </Text>
          <Box mt="56px">
            <Flex
              direction={{ base: 'column', md: 'row' }}
              align="center"
              gap="40px"
            >
              <AchievementItem icon={<GithubStarIcon />}>
                Github Star
              </AchievementItem>
              <AchievementItem icon={<ChakraLogo />}>
                Creator, Chakra UI
              </AchievementItem>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
