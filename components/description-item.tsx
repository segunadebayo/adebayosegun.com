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
            color="sage.base"
            fontSize="sm"
            fontWeight="semibold"
            textTransform="uppercase"
            letterSpacing="widest"
          >
            {item.title}
          </Box>
          <Box as="dd" fontSize="3xl" fontFamily="heading" fontWeight="bold">
            {item.content}
          </Box>
        </Box>
      ))}
    </Flex>
  );
}
