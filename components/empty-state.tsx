import { Box, Text } from '@chakra-ui/react';

export default function EmptyState() {
  return (
    <Box paddingY="5">
      <Text>No results found that match your query. Sorry</Text>
    </Box>
  );
}
