import { Flex, FlexProps } from '@chakra-ui/react';
import TagCheckbox from './tag-checkbox';

type TagCheckboxGroupProps<T> = Omit<FlexProps, 'onChange'> & {
  data: T[];
  isChecked(value: string): boolean;
  onChange(details: { checked: boolean; value: T }): void;
};

export default function TagCheckboxGroup<T extends string>(props: TagCheckboxGroupProps<T>) {
  const { data, isChecked, onChange, ...rest } = props;
  return (
    <Flex gap="3" wrap="wrap" {...rest}>
      {data.map((item) => (
        <TagCheckbox
          key={item}
          checked={isChecked(item)}
          value={item}
          onChange={(e) => {
            onChange({ checked: e.target.checked, value: item });
          }}
        >
          {item}
        </TagCheckbox>
      ))}
    </Flex>
  );
}
