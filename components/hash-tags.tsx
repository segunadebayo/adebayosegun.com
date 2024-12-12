import { Box, Flex, FlexProps, HStack, StackProps } from '@chakra-ui/react'

type HashTagsProps = {
  spacing?: StackProps['gap']
  data: string[]
  tagProps?: FlexProps
}

export default function HashTags(props: HashTagsProps) {
  const { data, spacing, tagProps } = props
  return (
    <HStack gap={spacing}>
      {data.map((item) => (
        <Flex key={item} opacity={0.8} userSelect='none' {...tagProps}>
          <Box as='span' color='brown.600'>
            #
          </Box>
          <span>{item}</span>
        </Flex>
      ))}
    </HStack>
  )
}
