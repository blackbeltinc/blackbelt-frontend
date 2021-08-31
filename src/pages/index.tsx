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
  const { colorMode, toggleColorMode } = useColorMode();

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
            useColorModeValue('light.outline', 'dark.outline'),
          ]}
          boxShadow={['none', 'base']}
          borderRadius="xl"
          flexDir="column"
        >
          <Heading
            alignSelf="center"
            mb="16"
            color={useColorModeValue('light.primary', 'dark.primary')}
          >
            BlackBelt
          </Heading>
          <Stack spacing="6">
            <FormControl>
              <FormLabel
                htmlFor="email"
                fontWeight="bold"
                color={useColorModeValue('light.primary', 'dark.primary')}
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
                borderColor={useColorModeValue('light.details', 'dark.details')}
              >
                <Icon
                  as={TiUser}
                  fontSize="24px"
                  color={useColorModeValue('light.primary', 'dark.primary')}
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
                color={useColorModeValue('light.primary', 'dark.primary')}
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
                borderColor={useColorModeValue('light.details', 'dark.details')}
              >
                <Icon
                  as={TiLockClosed}
                  fontSize="24px"
                  color={useColorModeValue('light.primary', 'dark.primary')}
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
                      color={useColorModeValue('light.details', 'dark.details')}
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
            color={useColorModeValue('light.primary', 'dark.primary')}
            fontSize="smaller"
            alignSelf="end"
          >
            Esqueceu sua senha?
          </Button>
          <Button
            type="submit"
            mt="16"
            size="lg"
            color={useColorModeValue('light.bg', 'dark.bg')}
            bg={useColorModeValue('light.primary', 'dark.primary')}
          >
            Entrar
          </Button>
        </Flex>
      </Flex>
      <IconButton
        icon={
          <Icon
            as={colorMode === 'light' ? RiMoonFill : RiSunFill}
            fontSize="24"
          />
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
