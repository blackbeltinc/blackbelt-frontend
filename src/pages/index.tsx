import {
  Button,
  Flex,
  Heading,
  Icon,
  IconButton,
  Image,
  Link,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { RiMoonFill, RiSunFill } from 'react-icons/ri';
import { TiLockClosed, TiUser } from 'react-icons/ti';
import * as yup from 'yup';
import { Input } from '../components/Input';
import { PWAInstallPrompt } from '../components/PWAInstallPrompt';

type LoginFormData = {
  email: string;
  password: string;
};

const loginFormSchema = yup.object({
  email: yup
    .string()
    .required('O campo e-mail é obrigatório.')
    .email('E-mail inválido.'),
  password: yup.string().required('O campo senha é obrigatório.'),
});

export default function Login() {
  const { toggleColorMode } = useColorMode();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(loginFormSchema),
  });

  const handleLogin: SubmitHandler<LoginFormData> = async (values, event) => {
    event.preventDefault();
    console.log(values);
  };

  return (
    <Flex w="100vw" h="100vh" direction="column">
      <PWAInstallPrompt />
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
          onSubmit={handleSubmit(handleLogin)}
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
              error={errors.email}
              {...register('email')}
            />
            <Input
              id="password"
              label="SENHA"
              inputType="password"
              icon={TiLockClosed}
              placeholder="digite sua senha"
              error={errors.password}
              {...register('password')}
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
          <Button
            type="submit"
            mt="16"
            size="lg"
            colorScheme="blackbelt"
            isLoading={isSubmitting}
          >
            Entrar
          </Button>
        </Flex>
        <Text mt="1.5rem">
          Não possui uma conta?
          <Link
            href="/register"
            ml="0.25rem"
            fontWeight="bold"
            color={useColorModeValue('blackbelt.500', 'blackbelt.200')}
          >
            Registre-se
          </Link>
        </Text>
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
