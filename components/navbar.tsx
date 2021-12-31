import {
  Box,
  Center,
  Circle,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  HStack,
  Icon,
  Stack,
  StackDivider,
  StackProps,
  Text,
  useBreakpointValue,
  useDisclosure,
  VisuallyHidden,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ElementType, ReactNode, useEffect } from 'react';
import {
  BlogIcon,
  CloseIcon,
  HamburgerMenuIcon,
  ProjectIcon,
  SnippetIcon,
  TalksIcon,
} from './nav-icons';

type NavItemProps = {
  children: ReactNode;
  active?: boolean;
  icon: ElementType;
  href?: string;
  large?: boolean;
};

function NavItem(props: NavItemProps) {
  const { children, icon, active, href, large } = props;
  return (
    <Link href={href} passHref>
      <HStack
        as="a"
        spacing="2"
        paddingX="3"
        paddingY={large ? '5' : '2.5'}
        rounded="lg"
        aria-current={active ? 'page' : undefined}
        _hover={{ color: 'sage.base' }}
        _activeLink={{ bg: 'dustAlpha.darker' }}
      >
        <Icon as={icon} color="#FEB48C" fontSize="lg" />
        <Text fontFamily="heading">{children}</Text>
      </HStack>
    </Link>
  );
}

const items = [
  { label: 'Talks', href: '/talks', icon: TalksIcon },
  { label: 'Blogs', href: '/blog', icon: BlogIcon },
  { label: 'Projects', href: '/projects', icon: ProjectIcon },
  { label: 'Snippets', href: '/snippets', icon: SnippetIcon },
];

function DesktopNavItemGroup(props: StackProps) {
  const { asPath } = useRouter();
  return (
    <HStack as="nav" aria-label="Main navigation" spacing="8" {...props}>
      {items.map((item) => (
        <NavItem
          key={item.label}
          href={item.href}
          icon={item.icon}
          active={asPath.startsWith(item.href)}
        >
          {item.label}
        </NavItem>
      ))}
    </HStack>
  );
}

function MobileNavItemGroup(props: StackProps) {
  return (
    <Stack
      divider={<StackDivider borderColor="whiteAlpha.300" />}
      as="nav"
      aria-label="Main navigation"
      spacing="0"
      {...props}
    >
      {items.map((item) => (
        <NavItem key={item.label} href={item.href} icon={item.icon} large>
          {item.label}
        </NavItem>
      ))}
    </Stack>
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
      <VisuallyHidden>Home</VisuallyHidden>
      <Image
        priority
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

function MobileNavMenu() {
  const menu = useDisclosure();

  const breakpoint = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    if (menu.isOpen && !breakpoint) {
      menu.onClose();
    }
  }, [breakpoint, menu]);

  return (
    <>
      <Center
        width="10"
        height="10"
        display={{ base: 'flex', md: 'none' }}
        as="button"
        aria-haspopup="true"
        aria-expanded={menu.isOpen}
        aria-controls="nav-menu"
        id="nav-menu--trigger"
        type="button"
        onClick={menu.onOpen}
      >
        {menu.isOpen ? <CloseIcon /> : <HamburgerMenuIcon />}
      </Center>
      <Drawer isOpen={menu.isOpen} onClose={menu.onClose} placement="bottom">
        <DrawerOverlay />
        <DrawerContent id="nav-menu" bg="black" padding="6">
          <MobileNavItemGroup />
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default function Navbar() {
  return (
    <Box as="header" paddingY="6" maxWidth="6xl" marginX="auto" paddingX="6">
      <Flex justify="space-between" align="center">
        <Link href="/" passHref>
          <a>
            <Headshot />
          </a>
        </Link>
        <DesktopNavItemGroup display={{ base: 'none', md: 'flex' }} />
        <MobileNavMenu />
      </Flex>
    </Box>
  );
}
