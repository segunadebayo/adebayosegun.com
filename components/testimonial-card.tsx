import { Testimonial } from 'contentlayer/generated';
import { Box, Circle, HStack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { FullLinkedInLogo, LinkedInIcon } from './social-icons';

type TestimonialCardProps = {
  data: Testimonial;
};

export default function TestimonialCard(props: TestimonialCardProps) {
  const { data: testimonial } = props;
  return (
    <Box bg="gray.800" rounded="2xl" position="relative" padding="6" shadow="highlight">
      <LinkedInBadge />

      <Box>
        <HStack spacing="5">
          <Circle overflow="hidden">
            <Image alt={testimonial.name} width="40" height="40" src={testimonial.image} />
          </Circle>
          <Box>
            <Text fontWeight="bold">{testimonial.name}</Text>
            <Text opacity={0.8} fontSize="sm">
              {testimonial.title}
            </Text>
          </Box>
        </HStack>
      </Box>

      <Box
        marginTop="6"
        fontSize="sm"
        lineHeight="tall"
        as="blockquote"
        dangerouslySetInnerHTML={{ __html: testimonial.body.html }}
        sx={{
          'p + p': {
            marginTop: '4',
          },
        }}
      />
    </Box>
  );
}

function LinkedInBadge() {
  return (
    <>
      <Box position="absolute" right="6" display={{ base: 'none', md: 'block' }} color="brown.600">
        <FullLinkedInLogo />
      </Box>
      <Box position="absolute" right="6" display={{ md: 'none' }} color="brown.600">
        <LinkedInIcon />
      </Box>
    </>
  );
}
