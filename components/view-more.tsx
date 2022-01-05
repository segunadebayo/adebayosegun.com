import { Box, HStack, Text, useToken } from '@chakra-ui/react';
import React, { Ref } from 'react';
import { ArrowRightIcon } from './social-icons';

type ViewBoxProps = {
  as?: React.ElementType;
  children: React.ReactNode;
};

const ViewMore = React.forwardRef(function ViewBox(
  { children, as = 'a', ...rest }: ViewBoxProps,
  ref: Ref<any>,
) {
  const sageBase = useToken('colors', 'sage.base');
  return (
    <HStack as={as} display="inline-flex" data-group ref={ref} {...rest}>
      <Text fontWeight="bold" color="sage.base">
        {children}
      </Text>
      <Box transform="auto" transition="transform 0.2s" _groupHover={{ translateX: '3px' }}>
        <ArrowRightIcon color={sageBase} />
      </Box>
    </HStack>
  );
});

export default ViewMore;
