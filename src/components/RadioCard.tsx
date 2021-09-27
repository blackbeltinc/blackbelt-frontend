import {
  Box,
  Text,
  useColorModeValue,
  useRadio,
  UseRadioProps,
} from '@chakra-ui/react';

interface RadioCardProps extends UseRadioProps {
  children: string;
}

export function RadioCard({ children, ...rest }: RadioCardProps) {
  const { getInputProps, getCheckboxProps } = useRadio({ ...rest });

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        color={useColorModeValue('blackbelt.500', 'blackbelt.200')}
        borderColor={useColorModeValue('blackbelt.500', 'blackbelt.200')}
        _checked={{
          bg: useColorModeValue('blackbelt.500', 'blackbelt.200'),
          color: useColorModeValue('gray.50', 'gray.800'),
          borderColor: useColorModeValue('blackbelt.500', 'blackbelt.200'),
        }}
        _focus={{
          boxShadow: 'outline',
        }}
        px={5}
        py={3}
      >
        <Text textAlign="center" fontWeight="bold">
          {children}
        </Text>
      </Box>
    </Box>
  );
}
