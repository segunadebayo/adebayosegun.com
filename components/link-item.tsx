import { HStack, Icon, Text } from '@chakra-ui/react';

export default function LinkItem({ icon, children, href }) {
  return (
    <HStack as="a" href={href} rel="noopener" target="_blank" spacing="3">
      <Icon aria-hidden as={icon} fontSize="4xl" color="#FEB48C" />
      <Text
        fontSize="lg"
        textDecoration="underline"
        textDecorationThickness="1px"
        textUnderlineOffset="3px"
      >
        {children}
      </Text>
    </HStack>
  );
}
