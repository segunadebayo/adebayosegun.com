import { Box, useCheckbox, UseCheckboxProps } from '@chakra-ui/react';

type TagCheckboxProps = {
  value: string;
  children: React.ReactNode;
  onChange?: UseCheckboxProps['onChange'];
  checked?: boolean;
};

export default function TagCheckbox(props: TagCheckboxProps) {
  const { value, children, onChange, checked } = props;

  const { getInputProps, getRootProps, getLabelProps, getCheckboxProps } = useCheckbox({
    onChange,
    value,
    isChecked: checked,
  });

  return (
    <label {...getRootProps()}>
      <Box
        {...getCheckboxProps()}
        userSelect="none"
        data-value={value}
        px="4"
        py="2"
        bg="dustAlpha.darker"
        rounded="lg"
        border="1px solid"
        borderColor="dustAlpha.darker"
        fontWeight="bold"
        fontFamily="heading"
        cursor="pointer"
        _hover={{ borderColor: 'sage.base' }}
        _checked={{ bg: 'sage.base', color: 'black' }}
        _disabled={{ opacity: 0.4, pointerEvents: 'none', cursor: 'unset' }}
      >
        <span {...getLabelProps()}>{children}</span>
      </Box>
      <input {...getInputProps()} />
    </label>
  );
}
