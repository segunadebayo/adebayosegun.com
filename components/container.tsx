import { Box } from '@chakra-ui/react';
import Footer from 'components/footer';
import Navbar from 'components/navbar';

export default function Container({ children }) {
  return (
    <Box>
      <Navbar />
      <Box maxWidth="6xl" marginX="auto" paddingX="6">
        <main id="content">{children}</main>
      </Box>
      <Footer />
    </Box>
  );
}
