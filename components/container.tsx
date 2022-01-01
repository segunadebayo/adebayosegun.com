import { Box } from '@chakra-ui/react';
import Footer from 'components/footer';
import Navbar from 'components/navbar';
import React from 'react';
import { AboveTheFoldGradient } from './gradients';

export default function Container({
  children,
  gradient,
}: {
  children: React.ReactNode;
  gradient?: React.ReactElement;
}) {
  return (
    <Box>
      <Navbar />
      <AboveTheFoldGradient />
      {gradient}
      <Box maxWidth="6xl" marginX="auto" paddingX="6">
        <Box as="main" id="content" position="relative" zIndex={1}>
          {children}
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
