import { Box, Circle, Flex, HStack, Icon, Text, VisuallyHidden } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { ElementType, ReactNode } from 'react';
import { BlogIcon, ProjectIcon, SnippetIcon, TalksIcon } from './nav-icons';

type NavItemProps = {
  children: ReactNode;
  active?: boolean;
  icon: ElementType;
  href?: string;
};

function NavItem(props: NavItemProps) {
  const { children, icon, active, href } = props;
  return (
    <Link href={href} passHref>
      <HStack
        as="a"
        spacing="2"
        paddingX="3"
        paddingY="2.5"
        rounded="lg"
        aria-current={active ? 'page' : undefined}
        _hover={{ color: 'sage.base' }}
        _activeLink={{ bg: 'sage.base' }}
      >
        <Icon as={icon} color="#FEB48C" fontSize="lg" />
        <Text fontFamily="heading">{children}</Text>
      </HStack>
    </Link>
  );
}

const items = [
  { label: 'Talks', href: '/talks', icon: TalksIcon },
  { label: 'Blogs', href: '/blogs', icon: BlogIcon },
  { label: 'Projects', href: '/projects', icon: ProjectIcon },
  { label: 'Snippets', href: '/snippets', icon: SnippetIcon },
];

export function NavItemGroup() {
  return (
    <HStack as="nav" aria-label="Main navigation" spacing="8">
      {items.map((item) => (
        <NavItem key={item.label} href={item.href} icon={item.icon}>
          {item.label}
        </NavItem>
      ))}
    </HStack>
  );
}

function Headshot() {
  return (
    <Circle
      rounded="9999px"
      overflow="hidden"
      outline="2px solid"
      outlineColor="sage.base"
      outlineOffset="4px"
      width="8"
      height="8"
    >
      <Image
        alt="Segun Adebayo"
        src="/static/images/segun-adebayo-headshot.jpg"
        layout="fixed"
        width="32"
        height="32"
        objectFit="cover"
      />
    </Circle>
  );
}

export default function Navbar() {
  return (
    <Box as="header" paddingY="6" maxWidth="6xl" marginX="auto" paddingX="6">
      <Flex justify="space-between">
        <Link href="/">
          <>
            <VisuallyHidden>Home</VisuallyHidden>
            <Headshot />
          </>
        </Link>
        <NavItemGroup />
      </Flex>
    </Box>
  );
}
