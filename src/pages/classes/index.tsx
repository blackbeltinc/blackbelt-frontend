/* eslint-disable no-nested-ternary */
import {
  Button,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Spinner,
  IconButton,
  useBreakpointValue,
} from '@chakra-ui/react';
import dayjs from 'dayjs';
import Link from 'next/link';
import router from 'next/router';
import { IoSearch } from 'react-icons/io5';
import { RiAddLine } from 'react-icons/ri';
import { MainContainer } from '../../components/MainContainer';
import { useClasses } from '../../hooks/useClasses';
import { withSSRAuth } from '../../utils/withSSRAuth';

export default function Classes() {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  const { data, isLoading, isFetching, error } = useClasses();

  function onView(id: number) {
    router.push({ pathname: '/classes/view', query: { id } });
  }

  return (
    <MainContainer>
      <Flex mb="8" justify="space-between" w="100%">
        <Heading size="lg">
          Aulas
          {!isLoading && isFetching && (
            <Spinner size="sm" color="gray.500" ml="4" />
          )}
        </Heading>
        <Link href="/classes/create" passHref>
          <Button
            as="a"
            size="sm"
            fontSize="sm"
            colorScheme="blackbelt"
            leftIcon={<Icon as={RiAddLine} />}
          >
            Nova aula
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
        <Table variant="simple" size="sm">
          <Thead>
            <Tr>
              <Th>Data/Hora</Th>
              <Th>Descrição</Th>
              <Th isNumeric />
            </Tr>
          </Thead>
          <Tbody>
            {data.map((jclass) => (
              <Tr>
                <Td>{dayjs(jclass.date).format('DD/MM/YYYY HH:mm')}</Td>
                <Td>{jclass.description}</Td>
                <Td isNumeric>
                  {isWideVersion ? (
                    <Button
                      onClick={() => {
                        onView(jclass.id);
                      }}
                    >
                      Detalhes
                    </Button>
                  ) : (
                    <IconButton
                      icon={<Icon as={IoSearch} fontSize="xl" />}
                      onClick={() => {
                        onView(jclass.id);
                      }}
                      aria-label="Visualizar"
                      colorScheme="gray"
                      size="sm"
                    />
                  )}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}
    </MainContainer>
  );
}

export const getServerSideProps = withSSRAuth(async () => {
  return {
    props: {},
  };
});
