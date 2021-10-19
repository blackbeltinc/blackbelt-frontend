/* eslint-disable no-nested-ternary */
import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import { RiAddLine } from 'react-icons/ri';
import { MainContainer } from '../../components/MainContainer';
import { useStudents } from '../../hooks/useStudents';
import { withSSRAuth } from '../../utils/withSSRAuth';

export default function StudentList() {
  const { data, isLoading, isFetching, error } = useStudents();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

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
        <>
          <Table>
            <Thead>
              <Tr>
                <Th>Aluno</Th>
                {isWideVersion && <Th>Telefone</Th>}
                <Th>Faixa</Th>
                {isWideVersion && <Th>Nível</Th>}
              </Tr>
            </Thead>
            <Tbody>
              {data.map((student) => (
                <Tr key={student.id}>
                  <Td>
                    <Box>
                      <Text fontWeight="bold">
                        {student.first_name} {student.last_name}
                      </Text>
                      <Text fontSize="sm" color="gray.300">
                        {student.email}
                      </Text>
                    </Box>
                  </Td>
                  {isWideVersion && <Td>{student.phone}</Td>}
                  <Td>{student.belt}</Td>
                  {isWideVersion && <Td>{student.level}</Td>}
                </Tr>
              ))}
            </Tbody>
          </Table>
        </>
      )}
    </MainContainer>
  );
}

export const getServerSideProps = withSSRAuth(async () => {
  return {
    props: {},
  };
});
