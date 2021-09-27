import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Icon,
  IconButton,
  Link,
  Stack,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import { RiMoonFill, RiSunFill } from 'react-icons/ri';
import { TiLockClosed, TiUser } from 'react-icons/ti';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { Input } from '../components/Input';
import { RadioGroup } from '../components/RadioGroup';

export default function Register() {
  const { toggleColorMode } = useColorMode();
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (index: number) => {
    setTabIndex(index);
  };

  const handleNextTab = () => {
    setTabIndex(tabIndex + 1);
  };

  const handlePrevTab = () => {
    setTabIndex(tabIndex - 1);
  };

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
          <Heading as="h1" fontSize="28">
            Bem vindo ao Blackbelt
          </Heading>
          <Text mt="0.25rem" color="gray.400">
            Olá, seja bem vindo ao Blackbelt! Você poderá utilizar a aplicação
            assim que concluir o seu registro.
          </Text>

          <Tabs
            mt="1.5rem"
            variant="soft-rounded"
            colorScheme="gray"
            index={tabIndex}
            onChange={handleTabChange}
          >
            <TabPanels>
              <TabPanel px="0px">
                <Box minH="250px">
                  <Heading
                    as="h2"
                    fontSize="1rem"
                    color={useColorModeValue('blackbelt.500', 'blackbelt.200')}
                    mb="1rem"
                  >
                    QUEM É VOCÊ?
                  </Heading>
                  <RadioGroup
                    options={['Mestre', 'Aluno']}
                    name="role"
                    defaultValue="Mestre"
                    onChange={(value) => console.log(value)}
                  />
                </Box>
                <ButtonGroup w="100%" mt="3rem">
                  <Button
                    w="calc(50% - 0.25rem)"
                    colorScheme="blackbelt"
                    onClick={handleNextTab}
                    ml="auto"
                    rightIcon={<IoChevronForward />}
                  >
                    Próximo
                  </Button>
                </ButtonGroup>
              </TabPanel>
              <TabPanel px="0px">
                <Box minH="250px">
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
                      label="SENHA"
                      inputType="password"
                      icon={TiLockClosed}
                      placeholder="digite sua senha"
                    />
                    <Input
                      id="password"
                      label="CONFIRME SUA SENHA"
                      inputType="password"
                      icon={TiLockClosed}
                      placeholder="digite sua senha"
                    />
                  </Stack>
                </Box>
                <ButtonGroup w="100%" mt="3rem">
                  <Button
                    w="100%"
                    colorScheme="blackbelt"
                    variant="outline"
                    onClick={handlePrevTab}
                    color={useColorModeValue('blackbelt.500', 'blackbelt.200')}
                    borderColor={useColorModeValue(
                      'blackbelt.500',
                      'blackbelt.200',
                    )}
                    leftIcon={<IoChevronBack />}
                  >
                    Anterior
                  </Button>
                  <Button
                    colorScheme="blackbelt"
                    onClick={handleNextTab}
                    w="100%"
                    rightIcon={<IoChevronForward />}
                  >
                    Próximo
                  </Button>
                </ButtonGroup>
              </TabPanel>
              <TabPanel px="0px">
                <Box minH="250px">
                  <Stack spacing="6">
                    <Input
                      id="name"
                      label="NOME"
                      inputType="text"
                      placeholder="digite seu nome completo"
                    />
                    <Input
                      id="birthdate"
                      label="DATA DE NASCIMENTO"
                      inputType="date"
                      placeholder="DD/MM/AAAA"
                    />
                  </Stack>
                </Box>
                <ButtonGroup w="100%" mt="3rem">
                  <Button
                    w="100%"
                    colorScheme="blackbelt"
                    variant="outline"
                    color={useColorModeValue('blackbelt.500', 'blackbelt.200')}
                    borderColor={useColorModeValue(
                      'blackbelt.500',
                      'blackbelt.200',
                    )}
                    onClick={handlePrevTab}
                    leftIcon={<IoChevronBack />}
                  >
                    Anterior
                  </Button>
                  <Button w="100%" colorScheme="blackbelt">
                    Registrar
                  </Button>
                </ButtonGroup>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
        <Text mt="1.5rem">
          Já possui conta?
          <Link
            href="/"
            ml="0.25rem"
            fontWeight="bold"
            color={useColorModeValue('blackbelt.500', 'blackbelt.200')}
          >
            Entre
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
