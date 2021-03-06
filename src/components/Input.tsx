import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  IconButton,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  useColorModeValue,
} from '@chakra-ui/react';
import { forwardRef, ForwardRefRenderFunction, useState } from 'react';
import { FieldError } from 'react-hook-form';
import { IconType } from 'react-icons';
import { AiFillEye, AiOutlineEye } from 'react-icons/ai';

interface InputProps extends ChakraInputProps {
  id: string;
  label?: string;
  inputType: string;
  icon?: IconType;
  error?: FieldError;
  mask?: string;
  maskChar?: any;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { id, label, inputType, icon, error = null, ...rest },
  ref,
) => {
  const [revealPassword, setRevealPassword] = useState(false);
  function toggleRevealPassword() {
    setRevealPassword(!revealPassword);
  }

  return (
    <FormControl id={id} isInvalid={!!error}>
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
        fontSize="1rem"
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
          ref={ref}
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

      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
