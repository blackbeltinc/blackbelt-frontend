import { Stack, useRadioGroup } from '@chakra-ui/react';
import { RadioCard } from './RadioCard';

interface RadioGroupProps {
  name: string;
  options: string[];
  defaultValue: string;
  onChange: (value: string) => void;
}

export function RadioGroup({ options, ...rest }: RadioGroupProps) {
  const { getRootProps, getRadioProps } = useRadioGroup({
    ...rest,
  });

  const group = getRootProps();

  return (
    <Stack {...group} spacing="0.75rem">
      {options.map((value: string) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard key={value} {...radio}>
            {value}
          </RadioCard>
        );
      })}
    </Stack>
  );
}
