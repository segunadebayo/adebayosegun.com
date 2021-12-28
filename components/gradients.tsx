import { Box } from '@chakra-ui/react';

export function AboveTheFoldGradient() {
  return (
    <Box
      width="100%"
      height="920px"
      position="absolute"
      top="0"
      left="0"
      pointerEvents="none"
      bg="radial-gradient(53.09% 53.09% at 50% 37.57%, rgba(255, 129, 60, 0.4) 0%, rgba(18, 19, 24, 0) 100%);"
    />
  );
}

export function SpanGradient() {
  return (
    <Box
      width="100%"
      height="1400px"
      position="absolute"
      left="0"
      top="700px"
      pointerEvents="none"
      bg="linear-gradient(180deg, rgba(33, 33, 33, 0) 0%, rgba(214, 94, 28, 0.3) 45.31%, rgba(19, 19, 19, 0) 100%)"
    />
  );
}

export function StartSideGradient() {
  return (
    <Box
      width="100%"
      height="1000px"
      position="absolute"
      left="-400px"
      top="-10"
      bg="radial-gradient(50% 50% at 50% 50%, #FF7D35 0%, rgba(0, 0, 0, 0) 100%)"
      opacity="0.4"
    />
  );
}
