import { Box, HStack, Text, useToken } from '@chakra-ui/react';
import { ArrowRightIcon } from './social-icons';

export default function ViewMore({ children, href = '#' }) {
  const sageBase = useToken('colors', 'sage.base');
  return (
    <HStack as="a" display="inline-flex" data-group>
      <Text fontWeight="bold" color="sage.base">
        {children}
      </Text>
      <Box transform="auto" transition="transform 0.2s" _groupHover={{ translateX: '3px' }}>
        <ArrowRightIcon color={sageBase} />
      </Box>
    </HStack>
  );
}
