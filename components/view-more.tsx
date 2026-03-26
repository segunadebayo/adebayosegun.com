import { Box, HStack, Text } from '@chakra-ui/react';
import { system } from 'lib/theme';
import * as React from 'react';
import { ArrowRightIcon } from './social-icons';

type ViewBoxProps = {
  as?: React.ElementType;
  href?: string;
  children: React.ReactNode;
};

const ViewMore = React.forwardRef(function ViewBox(
  { children, as = 'a', href, ...rest }: ViewBoxProps,
  ref: React.Ref<any>,
) {
  return (
    <HStack as={as} display="inline-flex" className="group" ref={ref} {...rest}>
      <Text fontWeight="bold" color="brown.600">
        {children}
      </Text>
      <Box transform="auto" transition="transform 0.2s" _groupHover={{ translateX: '3px' }}>
        <ArrowRightIcon color={system.token('colors.brown.600')} />
      </Box>
    </HStack>
  );
});

export default ViewMore;
