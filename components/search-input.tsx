import { AbsoluteCenter, Box, chakra, Flex } from '@chakra-ui/react';

function SearchIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M22.0001 22L15.6561 15.656"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
      <path
        d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
    </svg>
  );
}

export default function SearchInput() {
  return (
    <Flex position="relative">
      <chakra.input
        type="search"
        name="q"
        bg="whiteAlpha.200"
        flex="1"
        rounded="lg"
        height="48px"
        paddingLeft="6"
        paddingRight="16"
        fontSize="lg"
        fontFamily="heading"
        placeholder="Search articles"
      />
      <AbsoluteCenter axis="vertical" pointerEvents="none" right="5" color="sage.base">
        <SearchIcon />
      </AbsoluteCenter>
    </Flex>
  );
}
