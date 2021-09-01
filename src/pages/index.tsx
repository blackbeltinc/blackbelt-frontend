import {
  Button,
  Flex,
  Heading,
  Icon,
  IconButton,
  Image,
  Stack,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { RiMoonFill, RiSunFill } from 'react-icons/ri';
import { TiLockClosed, TiUser } from 'react-icons/ti';
import { Input } from '../components/Input';

export default function Login() {
  const { toggleColorMode } = useColorMode();

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
          <Heading as="h1">
            <Image
              src={useColorModeValue(
                'images/logo-light.svg',
                'images/logo-dark.svg',
              )}
              alt="BlackBelt"
              mb="16"
              w="220px"
              h="40px"
              mx="auto"
            />
          </Heading>
          <Stack spacing="6">
            <Input
              id="email"
              label="EMAIL"
              inputType="email"
              icon={TiUser}
              placeholder="digite seu e-mail"
            />
            <Input
              id="password"
              label="PASSWORD"
              inputType="password"
              icon={TiLockClosed}
              placeholder="digite sua senha"
            />
          </Stack>
          <Button
            variant="link"
            fontWeight="regular"
            mt="2"
            colorScheme="blackbelt"
            fontSize="smaller"
            ml="auto"
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
        aria-label="Toggle color mode"
        onClick={toggleColorMode}
      />
    </Flex>
  );
}
