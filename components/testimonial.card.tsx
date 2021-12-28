import { Testimonial } from '.contentlayer/types';
import { Avatar, Box, HStack, Text } from '@chakra-ui/react';
import { FullLinkedInLogo, LinkedInIcon } from './social-icons';

type TestimonialCardProps = {
  data: Testimonial;
};

export default function TestimonialCard(props: TestimonialCardProps) {
  const { data: testimonial } = props;
  return (
    <Box bg="dustAlpha.darker" rounded="2xl" position="relative" padding="6">
      <LinkedInBadge />

      <Box>
        <HStack spacing="5">
          <Avatar name={testimonial.name} src={testimonial.image} />
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
      <Box position="absolute" right="6" display={{ base: 'none', md: 'block' }} color="sage.base">
        <FullLinkedInLogo />
      </Box>
      <Box position="absolute" right="6" display={{ md: 'none' }} color="sage.base">
        <LinkedInIcon />
      </Box>
    </>
  );
}
