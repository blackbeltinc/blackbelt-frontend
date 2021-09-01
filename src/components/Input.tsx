import {
  Flex,
  FormControl,
  FormLabel,
  Icon,
  IconButton,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import { IconType } from 'react-icons';
import { AiFillEye, AiOutlineEye } from 'react-icons/ai';

interface InputProps extends ChakraInputProps {
  id: string;
  label?: string;
  inputType: string;
  icon?: IconType;
}

export function Input({ id, label, inputType, icon, ...rest }: InputProps) {
  const [revealPassword, setRevealPassword] = useState(false);
  function toggleRevealPassword() {
    setRevealPassword(!revealPassword);
  }

  return (
    <FormControl id={id}>
      {label && (
        <FormLabel
          fontWeight="bold"
          color={useColorModeValue('blackbelt.500', 'blackbelt.200')}
        >
          {label}
        </FormLabel>
      )}
      <Flex
        flex="1"
        alignSelf="center"
        borderBottom="1px"
        p="1"
        fontSize="16px"
        borderColor={useColorModeValue('gray.400', 'gray.300')}
      >
        {icon && (
          <Icon
            as={icon}
            fontSize="24px"
            color={useColorModeValue('blackbelt.500', 'blackbelt.200')}
          />
        )}
        <ChakraInput
          ml="2"
          variant="unstyled"
          type={
            // eslint-disable-next-line no-nested-ternary
            inputType === 'password'
              ? revealPassword
                ? 'text'
                : 'password'
              : inputType
          }
          {...rest}
        />
        {inputType === 'password' && (
          <IconButton
            icon={
              <Icon
                as={revealPassword ? AiFillEye : AiOutlineEye}
                fontSize="24"
                color={
                  revealPassword
                    ? useColorModeValue('blackbelt.500', 'blackbelt.200')
                    : useColorModeValue('gray.400', 'gray.300')
                }
              />
            }
            size="smaller"
            variant="unstyled"
            onClick={toggleRevealPassword}
            mr="2"
            aria-label="show password"
          />
        )}
      </Flex>
    </FormControl>
  );
}
