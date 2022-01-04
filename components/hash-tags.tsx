import { Box, Wrap, WrapItem } from '@chakra-ui/react';

type HashTagsProps = {
  data: string[];
};

export default function HashTags(props: HashTagsProps) {
  const { data } = props;
  return (
    <Wrap>
      {data.map((item) => (
        <WrapItem key={item} opacity={0.8} userSelect="none">
          <Box as="span" color="sage.base">
            #
          </Box>
          <span>{item}</span>
        </WrapItem>
      ))}
    </Wrap>
  );
}
