/* eslint-disable no-nested-ternary */
import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  IconButton,
  SimpleGrid,
  Spinner,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import router from 'next/router';
import { IoSearch } from 'react-icons/io5';
import { RiAddLine } from 'react-icons/ri';
import { MainContainer } from '../../components/MainContainer';
import { useStudents } from '../../hooks/useStudents';
import { withSSRAuth } from '../../utils/withSSRAuth';

export default function StudentList() {
  const { data, isLoading, isFetching, error } = useStudents();

  function onView(id: number) {
    router.push({ pathname: '/students/profile', query: { id } });
  }

  return (
    <MainContainer>
      <Flex mb="8" justify="space-between" w="100%">
        <Heading size="lg">
          Alunos
          {!isLoading && isFetching && (
            <Spinner size="sm" color="gray.500" ml="4" />
          )}
        </Heading>
        <Link href="/students/create" passHref>
          <Button
            as="a"
            size="sm"
            fontSize="sm"
            colorScheme="blackbelt"
            leftIcon={<Icon as={RiAddLine} />}
          >
            Criar novo
          </Button>
        </Link>
      </Flex>
      {isLoading ? (
        <Flex justify="center">
          <Spinner />
        </Flex>
      ) : error ? (
        <Flex justify="center">Falha ao obter dados dos usuários.</Flex>
      ) : (
        <SimpleGrid spacing="1rem" columns={[1, 3]}>
          {data.map((student) => (
            <Box
              key={student.id}
              bg={useColorModeValue('gray.50', 'gray.800')}
              p="1.5rem"
              borderRadius="lg"
            >
              <Flex
                direction="row"
                justify="space-between"
                mb="1rem"
                align="center"
              >
                <Flex align="center">
                  <Avatar
                    name={`${student.first_name} ${student.last_name}`}
                    bg={useColorModeValue('blackbelt.500', 'blackbelt.200')}
                    color={useColorModeValue('gray.50', 'gray.800')}
                    mr="0.5rem"
                  />
                  <Text
                    fontWeight="bold"
                    fontSize="xl"
                    overflow="hidden"
                    width="9rem"
                    whiteSpace="nowrap"
                    textOverflow="ellipsis"
                  >
                    {student.first_name} {student.last_name}
                  </Text>
                </Flex>
                <IconButton
                  icon={<Icon as={IoSearch} fontSize="xl" />}
                  onClick={() => {
                    onView(student.id);
                  }}
                  aria-label="Editar"
                  colorScheme="gray"
                  size="sm"
                />
              </Flex>
              <SimpleGrid columns={1} spacing="1rem">
                <Text>
                  <Text as="p" fontSize="sm" color="gray.300" fontWeight="bold">
                    EMAIL
                  </Text>
                  {student.email}
                </Text>
                <Text>
                  <Text as="p" fontSize="sm" color="gray.300" fontWeight="bold">
                    TELEFONE
                  </Text>
                  {student.phone}
                </Text>
                <Flex justify="space-between">
                  <Text>
                    <Text
                      as="p"
                      fontSize="smaller"
                      color="gray.300"
                      fontWeight="bold"
                    >
                      FAIXA
                    </Text>
                    {student.belt}
                  </Text>
                  <Text>
                    <Text
                      as="p"
                      fontSize="sm"
                      color="gray.300"
                      fontWeight="bold"
                    >
                      GRAU
                    </Text>
                    {student.level}
                  </Text>
                </Flex>
              </SimpleGrid>
            </Box>
          ))}
        </SimpleGrid>
      )}
    </MainContainer>
  );
}

export const getServerSideProps = withSSRAuth(async () => {
  return {
    props: {},
  };
});
