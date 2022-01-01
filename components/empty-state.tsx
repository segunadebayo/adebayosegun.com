import { Box, Text } from '@chakra-ui/react';

export default function EmptyState() {
  return (
    <Box minHeight="40rem">
      <Text>No results found that match your query. Sorry</Text>
    </Box>
  );
}
