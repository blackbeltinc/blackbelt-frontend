import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  IconButton,
  Input,
  Stack,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import { AiFillEye, AiOutlineEye } from 'react-icons/ai';
import { RiMoonFill, RiSunFill } from 'react-icons/ri';
import { TiLockClosed, TiUser } from 'react-icons/ti';

export default function Login() {
  const { toggleColorMode } = useColorMode();

  const [revealPassword, setRevealPassword] = useState(false);
  function toggleRevealPassword() {
    setRevealPassword(!revealPassword);
  }

  return (
    <Flex w="100vw" h="100vh" direction="column">
      <Flex
        w="100vw"
        h="100vh"
        align="center"
        justify="center"
        direction="column"
        mb="50px"
      >
        <Flex
          as="form"
          w="100%"
          maxW="360px"
          p="8"
          border={['0px', '1px']}
          borderColor={[
            'transparent',
            useColorModeValue('gray.200', 'gray.500'),
          ]}
          boxShadow={['none', 'base']}
          borderRadius="xl"
          flexDir="column"
        >
          <Heading
            alignSelf="center"
            mb="16"
            color={useColorModeValue('blackbelt.500', 'blackbelt.200')}
          >
            BlackBelt
          </Heading>
          <Stack spacing="6">
            <FormControl>
              <FormLabel
                htmlFor="email"
                fontWeight="bold"
                color={useColorModeValue('blackbelt.500', 'blackbelt.200')}
              >
                EMAIL
              </FormLabel>
              <Flex
                as="label"
                flex="1"
                alignSelf="center"
                borderBottom="1px"
                p="1"
                fontSize="16px"
                borderColor={useColorModeValue('gray.400', 'gray.300')}
              >
                <Icon
                  as={TiUser}
                  fontSize="24px"
                  color={useColorModeValue('blackbelt.500', 'blackbelt.200')}
                />
                <Input
                  ml="2"
                  name="email"
                  type="email"
                  variant="unstyled"
                  placeholder="digite seu e-mail"
                />
              </Flex>
            </FormControl>
            <FormControl>
              <FormLabel
                htmlFor="name"
                fontWeight="bold"
                color={useColorModeValue('blackbelt.500', 'blackbelt.200')}
              >
                SENHA
              </FormLabel>
              <Flex
                as="label"
                flex="1"
                alignSelf="center"
                borderBottom="1px"
                p="1"
                fontSize="16px"
                borderColor={useColorModeValue('gray.400', 'gray.300')}
              >
                <Icon
                  as={TiLockClosed}
                  fontSize="24px"
                  color={useColorModeValue('blackbelt.500', 'blackbelt.200')}
                />
                <Input
                  ml="2"
                  name="password"
                  type={revealPassword ? 'text' : 'password'}
                  variant="unstyled"
                  placeholder="digite sua senha"
                />
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
              </Flex>
            </FormControl>
          </Stack>
          <Button
            variant="link"
            fontWeight="regular"
            mt="2"
            colorScheme="blackbelt"
            fontSize="smaller"
            alignSelf="end"
          >
            Esqueceu sua senha?
          </Button>
          <Button type="submit" mt="16" size="lg" colorScheme="blackbelt">
            Entrar
          </Button>
        </Flex>
      </Flex>
      <IconButton
        icon={
          <Icon as={useColorModeValue(RiMoonFill, RiSunFill)} fontSize="24" />
        }
        mt="auto"
        ml="auto"
        m="4"
        variant="unstyled"
        size="sm"
        aria-label="Open navigation"
        onClick={toggleColorMode}
      />
    </Flex>
  );
}
