import { Alert, Box, chakra, Flex, Heading, Spinner, Text } from '@chakra-ui/react';
import { useSubscribeForm } from 'lib/use-subscribe-form';

const FeedbackInput = chakra('input', {
  base: {
    flex: '1',
    bg: 'gray.800',
    rounded: 'lg',
    paddingX: '6',
    paddingY: '5',
    _placeholder: { color: 'whiteAlpha.400' },
  },
});

const FeedbackButton = chakra('button', {
  base: {
    minW: '10.8rem',
    fontWeight: 'bold',
    letterSpacing: 'wide',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    textTransform: 'uppercase',
    color: 'black',
    paddingX: '10',
    paddingY: '5',
    rounded: 'lg',
    bg: 'brown.600',
    _hover: { bg: 'brown.700' },
    _active: { bg: 'brown.800' },
  },
});

function Feedback({ state, message }) {
  if (state === 'error') {
    return (
      <div className="dark">
        <Alert.Root role="status" status="error" rounded="md" variant="subtle" color="white" mt="5">
          <Alert.Content>{message}</Alert.Content>
        </Alert.Root>
      </div>
    );
  }

  if (state === 'success') {
    return (
      <div className="dark">
        <Alert.Root
          role="status"
          status="success"
          rounded="md"
          variant="subtle"
          color="white"
          mt="5"
        >
          <Alert.Content>{message}</Alert.Content>
        </Alert.Root>
      </div>
    );
  }

  return null;
}

export default function SubscribeForm() {
  const form = useSubscribeForm();
  return (
    <Box maxWidth="42rem" py="vGutter">
      <Heading marginBottom="4" size="2xl" letterSpacing="tight">
        Stay up to date
      </Heading>

      <Text maxW="32rem" fontSize="lg">
        Get emails from me about web development, tech, and early access to new projects.
      </Text>

      <form
        onSubmit={async (event) => {
          event.preventDefault();
          await form.submit();
        }}
      >
        <Flex gap="4" marginTop="8" direction={{ base: 'column', md: 'row' }}>
          <FeedbackInput
            required
            ref={form.inputRef}
            autoComplete="email"
            name="email"
            aria-label="Enter your email address"
            placeholder="you@email.com"
          />
          <FeedbackButton type="submit" aria-label="Enter your email address">
            {form.state === 'loading' ? <Spinner size="md" /> : 'Subscribe'}
          </FeedbackButton>
        </Flex>
      </form>
      <Feedback state={form.state} message={form.message} />
    </Box>
  );
}
