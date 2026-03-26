import { Flex, type FlexProps, HStack, Span, type StackProps } from '@chakra-ui/react';

type HashTagsProps = {
  spacing?: StackProps['gap'];
  data: string[];
  tagProps?: FlexProps;
};

export default function HashTags(props: HashTagsProps) {
  const { data, spacing, tagProps } = props;
  return (
    <HStack gap={spacing} wrap="wrap">
      {data.map((item) => (
        <Flex key={item} opacity={0.8} userSelect="none" {...tagProps}>
          <Span color="brown.600">#</Span>
          <span>{item}</span>
        </Flex>
      ))}
    </HStack>
  );
}
