import { Box, chakra, Flex, Heading, Text } from '@chakra-ui/react';

export default function SubscribeForm() {
  return (
    <Box maxWidth="42rem" py="vGutter">
      <Heading marginBottom="4" size="2xl" letterSpacing="tight">
        Stay up to date
      </Heading>

      <Text maxW="32rem" fontSize="lg">
        Get emails from me about web development, tech, and early access to new projects.
      </Text>

      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <Flex gap="4" marginTop="8" direction={{ base: 'column', md: 'row' }}>
          <chakra.input
            flex="1"
            paddingX="6"
            paddingY="5"
            name="email"
            aria-label="Enter your email address"
            bg="dust.darker"
            rounded="lg"
            placeholder="sage@apple.com"
            _placeholder={{ color: 'whiteAlpha.400' }}
          />
          <chakra.button
            type="submit"
            aria-label="Enter your email address"
            fontWeight="bold"
            letterSpacing="wide"
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            textTransform="uppercase"
            color="black"
            paddingX="10"
            paddingY="5"
            rounded="lg"
            transition="background 0.2s ease-in-out"
            bg="sage.base"
            _hover={{ bg: 'sage.dark' }}
            _active={{ bg: 'sage.darker' }}
          >
            Sign me up
          </chakra.button>
        </Flex>
      </form>
    </Box>
  );
}
