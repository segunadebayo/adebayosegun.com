import { Box, useCheckbox } from '@chakra-ui/react'

type TagCheckboxProps = {
  value: string
  children: React.ReactNode
  onChange?: (checked: boolean) => void
  checked?: boolean
}

export default function TagCheckbox(props: TagCheckboxProps) {
  const { value, children, onChange, checked } = props

  const checkbox = useCheckbox({
    onCheckedChange({ checked }) {
      onChange?.(!!checked)
    },
    value,
    checked,
  })

  return (
    <label {...checkbox.getRootProps()}>
      <Box
        {...checkbox.getControlProps()}
        userSelect='none'
        data-value={value}
        px='4'
        py='2'
        bg='gray.800'
        rounded='lg'
        fontWeight='bold'
        fontFamily='heading'
        cursor='pointer'
        shadow='highlight'
        _hover={{ color: 'brown.600' }}
        _checked={{ bg: 'brown.600', color: 'black' }}
        _disabled={{ opacity: 0.4, pointerEvents: 'none', cursor: 'unset' }}
      >
        <span {...checkbox.getLabelProps()}>{children}</span>
      </Box>
      <input {...checkbox.getHiddenInputProps()} />
    </label>
  )
}
