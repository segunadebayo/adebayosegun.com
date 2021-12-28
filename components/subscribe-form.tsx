import { Box, chakra, Flex, Heading, Text } from '@chakra-ui/react';

export default function SubscribeForm() {
  return (
    <Box maxWidth="560px" py="100px">
      <Heading mb="4" size="2xl" letterSpacing={'-0.04em'}>
        Stay up to date
      </Heading>
      <Text>
        Get emails from me about web development, tech, and early access to new
        projects.
      </Text>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <Flex
          gap={{ base: '4', md: '6' }}
          mt="8"
          direction={{ base: 'column', md: 'row' }}
        >
          <chakra.input
            flex="1"
            px="6"
            py="5"
            name="email"
            aria-label="Enter your email address"
            bg="rgba(254, 180, 140, 0.11)"
            rounded="12px"
            placeholder="sage@apple.com"
            _placeholder={{ color: '#A8806A' }}
          />
          <chakra.button
            type="submit"
            aria-label="Enter your email address"
            fontWeight={'bold'}
            letterSpacing={'0.1em'}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            textTransform={'uppercase'}
            bg="#FEB48C"
            color="#000"
            px="10"
            py="5"
            rounded="lg"
          >
            Sign me up
          </chakra.button>
        </Flex>
      </form>
    </Box>
  );
}
