import {
  Flex,
  Radio as ChackraRadio,
  RadioGroup as ChakraRadioGroup,
  RadioProps as ChakraRadioProps,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { forwardRef, ForwardRefRenderFunction, useState } from 'react';

interface RadioCardProps extends ChakraRadioProps {
  options: string[];
}

const RadioGroupBase: ForwardRefRenderFunction<
  HTMLInputElement,
  RadioCardProps
> = ({ options, ...rest }, ref) => {
  const [current, setCurrent] = useState('Mestre');

  return (
    <ChakraRadioGroup
      defaultChecked
      defaultValue="Mestre"
      onChange={setCurrent}
    >
      <Stack>
        {options.map((value) => {
          return (
            <Flex as="label" key={value}>
              <ChackraRadio ref={ref} value={value} {...rest} display="none" />
              {current === value ? (
                <Text
                  as="span"
                  fontSize="1rem"
                  fontWeight="bold"
                  textTransform="uppercase"
                  textAlign="center"
                  border="1px"
                  p="0.6rem"
                  w="100%"
                  borderRadius="md"
                  color={useColorModeValue('gray.50', 'gray.800')}
                  borderColor={useColorModeValue(
                    'blackbelt.500',
                    'blackbelt.200',
                  )}
                  background={useColorModeValue(
                    'blackbelt.500',
                    'blackbelt.200',
                  )}
                >
                  {value}
                </Text>
              ) : (
                <Text
                  as="span"
                  fontSize="1rem"
                  fontWeight="bold"
                  textTransform="uppercase"
                  textAlign="center"
                  border="1px"
                  p="0.6rem"
                  w="100%"
                  borderRadius="md"
                  color={useColorModeValue('blackbelt.500', 'blackbelt.200')}
                >
                  {value}
                </Text>
              )}
            </Flex>
          );
        })}
      </Stack>
    </ChakraRadioGroup>
  );
};

export const RadioGroup = forwardRef(RadioGroupBase);
