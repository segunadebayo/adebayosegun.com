import { DrawerBackdrop, DrawerContent, DrawerRoot, DrawerTrigger } from '@/components/ui/drawer'
import {
  Box,
  Center,
  Circle,
  DrawerContext,
  Flex,
  HStack,
  Icon,
  Stack,
  StackProps,
  StackSeparator,
  Text,
  useBreakpointValue,
  useDisclosure,
  VisuallyHidden,
} from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ElementType, ReactNode, useEffect } from 'react'
import {
  BlogIcon,
  CloseIcon,
  HamburgerMenuIcon,
  ProjectIcon,
  SnippetIcon,
  TalksIcon,
} from './nav-icons'

type NavItemProps = {
  data: NavItemData
  active?: boolean
  children: ReactNode
  large?: boolean
}

function NavItem(props: NavItemProps) {
  const { children, data, active, large } = props
  const IconEl = data.icon
  return (
    <HStack
      asChild
      gap='2'
      paddingX='3'
      paddingY={large ? '5' : '2.5'}
      rounded='lg'
      aria-current={active ? 'page' : undefined}
      _hover={{ color: 'brown.600' }}
      _currentPage={{ bg: 'gray.800', shadow: 'highlight' }}
    >
      <Link href={data.href}>
        <Icon color='brown.600' fontSize='lg'>
          <IconEl />
        </Icon>
        <Text fontFamily='heading'>{children}</Text>
      </Link>
    </HStack>
  )
}

interface NavItemData {
  label: string
  href: string
  icon: ElementType
  primary?: boolean
}

const items: NavItemData[] = [
  { label: 'Talks', href: '/talks', icon: TalksIcon },
  { label: 'Blog', href: '/blog', icon: BlogIcon },
  { label: 'Projects', href: '/projects', icon: ProjectIcon },
  { label: 'Snippets', href: '/snippets', icon: SnippetIcon },
]

function DesktopNavItemGroup(props: StackProps) {
  const { asPath } = useRouter()
  return (
    <HStack as='nav' aria-label='Main navigation' gap='8' {...props}>
      {items.map((item) => (
        <NavItem key={item.label} data={item} active={asPath.startsWith(item.href)}>
          {item.label}
        </NavItem>
      ))}
    </HStack>
  )
}

function MobileNavItemGroup(props: StackProps) {
  return (
    <Stack
      separator={<StackSeparator borderColor='whiteAlpha.300' />}
      as='nav'
      aria-label='Main navigation'
      gap='0'
      {...props}
    >
      {items.map((item) => (
        <NavItem key={item.label} data={item} large>
          {item.label}
        </NavItem>
      ))}
    </Stack>
  )
}

function Headshot() {
  return (
    <Circle size='10' rounded='full' borderWidth='2px' borderColor='brown.600'>
      <Circle rounded='full' overflow='hidden' size='8'>
        <VisuallyHidden>Home</VisuallyHidden>
        <Image
          priority
          alt='Segun Adebayo'
          src='/static/images/segun-adebayo-headshot.jpg'
          width={32}
          height={32}
          style={{ objectFit: 'cover' }}
        />
      </Circle>
    </Circle>
  )
}

function MobileNavMenu() {
  const menu = useDisclosure()

  const breakpoint = useBreakpointValue({ base: true, md: false })

  useEffect(() => {
    if (menu.open && !breakpoint) {
      menu.onClose()
    }
  }, [breakpoint, menu])

  return (
    <DrawerRoot placement='bottom'>
      <DrawerTrigger asChild>
        <Center width='10' height='10' display={{ base: 'flex', md: 'none' }} as='button'>
          <DrawerContext>
            {(drawer) => (drawer.open ? <CloseIcon /> : <HamburgerMenuIcon />)}
          </DrawerContext>
        </Center>
      </DrawerTrigger>
      <DrawerBackdrop />
      <DrawerContent bg='gray.800' padding='6'>
        <MobileNavItemGroup />
      </DrawerContent>
    </DrawerRoot>
  )
}

export default function Navbar() {
  return (
    <Box as='header' paddingY='6' maxWidth='6xl' marginX='auto' paddingX='6'>
      <Flex justify='space-between' align='center'>
        <Link href='/'>
          <Headshot />
        </Link>
        <DesktopNavItemGroup display={{ base: 'none', md: 'flex' }} />
        <MobileNavMenu />
      </Flex>
    </Box>
  )
}
