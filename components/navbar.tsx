import {
  Box,
  Circle,
  Flex,
  HStack,
  Icon,
  Text,
  VisuallyHidden
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { ElementType, ReactNode } from 'react';
import BlogIcon from './blog-icon';
import ProjectIcon from './project-icon';
import SnippetIcon from './snippet-icon';
import TalksIcon from './talks-icon';

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
        px="3"
        py="2.5"
        rounded="lg"
        aria-current={active ? 'page' : undefined}
        _hover={{ color: '#FEB48C' }}
        _activeLink={{
          bg: '#FEB48C'
        }}
      >
        <Icon as={icon} color="#FEB48C" fontSize="20px" />
        <Text fontFamily="heading">{children}</Text>
      </HStack>
    </Link>
  );
}

export function NavItemGroup() {
  return (
    <HStack as="nav" aria-label="Main navigation" spacing="8">
      <NavItem href="/talks" icon={TalksIcon}>
        Talks
      </NavItem>
      <NavItem href="/blog" icon={BlogIcon}>
        Blogs
      </NavItem>
      <NavItem href="/projects" icon={ProjectIcon}>
        Projects
      </NavItem>
      <NavItem href="/snippets" icon={SnippetIcon}>
        Snippets
      </NavItem>
    </HStack>
  );
}

function Headshot() {
  return (
    <Circle overflow="hidden" outline="2px solid #FEB48C" outlineOffset="4px">
      <Image
        alt="Segun Adebayo"
        src="/static/images/segun-adebayo-headshot.jpg"
        layout="fixed"
        width="48"
        height="48"
      />
    </Circle>
  );
}

export default function Navbar() {
  return (
    <Box as="header" py="6" maxW="1080px" mx="auto" px="24px">
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
