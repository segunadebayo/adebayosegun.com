import { HStack, Icon, SystemStyleObject, Text } from '@chakra-ui/react';
import { ElementType } from 'react';

type LinkItemProps = {
  icon: ElementType;
  children: string;
  href: string;
  iconColor?: SystemStyleObject['color'];
};

export default function LinkItem(props: LinkItemProps) {
  const { icon: IconEl, children, href, iconColor = 'brown.600' } = props;
  return (
    <HStack asChild gap="3">
      <a href={href} rel="noopener" target="_blank">
        <Icon aria-hidden fontSize="xl" color={iconColor}>
          <IconEl />
        </Icon>
        <Text textDecoration="underline" textDecorationThickness="1px" textUnderlineOffset="3px">
          {children}
        </Text>
      </a>
    </HStack>
  );
}
