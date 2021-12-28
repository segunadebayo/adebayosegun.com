import { Box, Flex } from '@chakra-ui/react';

type DescriptionItem = {
  title: string;
  content: string;
};

export function DescriptionList({ data }: { data: DescriptionItem[] }) {
  return (
    <Flex gap="16">
      {data.map((item) => (
        <Box as="dl" key={item.title}>
          <Box
            as="dt"
            color="#FEB48C"
            fontSize="sm"
            fontWeight="semibold"
            textTransform="uppercase"
            letterSpacing="0.13em"
          >
            {item.title}
          </Box>
          <Box
            as="dd"
            fontSize="3xl"
            fontFamily={'heading'}
            fontWeight={'bold'}
          >
            {item.content}
          </Box>
        </Box>
      ))}
    </Flex>
  );
}
