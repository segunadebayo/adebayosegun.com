import { Box, Center, Heading } from '@chakra-ui/react';
import Container from 'components/container';

export default function Page() {
  return (
    <Container>
      <Box minHeight="60vh">
        <Box maxWidth="4xl" marginX="auto" paddingTop="12" paddingBottom="8rem" textAlign="center">
          <Box pt="10">
            <Heading as="h1" fontSize="10em" color="brown.500">
              404
            </Heading>
            <p>Oh no! This page doesn't exist.</p>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
