import { Box, Wrap, WrapItem, WrapItemProps, WrapProps } from '@chakra-ui/react';

type HashTagsProps = {
  spacing?: WrapProps['spacing'];
  data: string[];
  tagProps?: WrapItemProps;
};

export default function HashTags(props: HashTagsProps) {
  const { data, spacing, tagProps } = props;
  return (
    <Wrap spacing={spacing}>
      {data.map((item) => (
        <WrapItem key={item} opacity={0.8} userSelect="none" {...tagProps}>
          <Box as="span" color="sage.base">
            #
          </Box>
          <span>{item}</span>
        </WrapItem>
      ))}
    </Wrap>
  );
}
