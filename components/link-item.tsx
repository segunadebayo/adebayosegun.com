import { HStack, Icon, SystemProps, Text } from '@chakra-ui/react';
import { ElementType } from 'react';

type LinkItemProps = {
  icon: ElementType;
  children: string;
  href: string;
  iconColor?: SystemProps['color'];
};

export default function LinkItem(props: LinkItemProps) {
  const { icon, children, href, iconColor = 'sage.base' } = props;
  return (
    <HStack as="a" href={href} rel="noopener" target="_blank" spacing="3">
      <Icon aria-hidden as={icon} fontSize="xl" color={iconColor} />
      <Text textDecoration="underline" textDecorationThickness="1px" textUnderlineOffset="3px">
        {children}
      </Text>
    </HStack>
  );
}
