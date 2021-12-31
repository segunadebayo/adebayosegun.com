import { Box, useCheckbox, UseCheckboxProps } from '@chakra-ui/react';

type CategoryTagProps = {
  value: string;
  children: React.ReactNode;
  onChange?: UseCheckboxProps['onChange'];
  disabled?: boolean;
};

export default function CategoryTag(props: CategoryTagProps) {
  const { value, children, onChange, disabled } = props;

  const { getInputProps, getRootProps, getLabelProps, getCheckboxProps } = useCheckbox({
    onChange,
    isDisabled: disabled,
    value,
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
