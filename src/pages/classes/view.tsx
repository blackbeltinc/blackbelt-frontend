/* eslint-disable no-nested-ternary */
import {
  Avatar,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Icon,
  IconButton,
  Link,
  Spinner,
  Table,
  Tag,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import dayjs from 'dayjs';
import router from 'next/router';
import { FiEdit } from 'react-icons/fi';
import { IoArrowBack, IoTrashOutline } from 'react-icons/io5';
import { toast } from 'react-toastify';
import { MainContainer } from '../../components/MainContainer';
import { useStudents } from '../../hooks/useStudents';
import { setupApiClient } from '../../services/api';
import { withSSRAuth } from '../../utils/withSSRAuth';

type Class = {
  id: number;
  master_id: number;
  date: Date;
  students_id: number[];
  description: string;
};

type ClassProps = {
  jclass: Class;
};

export default function ClassView({ jclass }: ClassProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  const { data, isLoading, error } = useStudents();

  function onEdit() {
    router.push({ pathname: '/classes/edit', query: { id: jclass.id } });
  }

  async function onRemove() {
    try {
      if (
        window.confirm(
          'Tem certeza que deseja remover essa aula? Essa ação é irreversível.',
        )
      ) {
        const api = setupApiClient();
        await api.delete(`/classes/${jclass.id}`);
        toast.success('Aula removida com sucesso.');
        router.push('/classes');
      }
    } catch (err) {
      toast.error(err.response.data.message);
    }
  }

  return (
    <MainContainer>
      <Flex mb="8" justify="space-between" w="100%">
        <Heading size="lg">
          Aula - {dayjs(jclass.date).format('DD/MM/YYYY HH:mm')}
        </Heading>
        <ButtonGroup>
          <Link href="/classes" passHref>
            {isWideVersion ? (
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                leftIcon={<Icon as={IoArrowBack} />}
              >
                Voltar
              </Button>
            ) : (
              <IconButton
                icon={<Icon as={IoArrowBack} fontSize="xl" />}
                aria-label="Voltar"
                size="sm"
              />
            )}
          </Link>
          {isWideVersion ? (
            <Button
              size="sm"
              fontSize="sm"
              colorScheme="blackbelt"
              leftIcon={<Icon as={FiEdit} />}
              onClick={onEdit}
            >
              Editar
            </Button>
          ) : (
            <IconButton
              icon={<Icon as={FiEdit} fontSize="xl" />}
              aria-label="Editar"
              colorScheme="blackbelt"
              size="sm"
              onClick={onEdit}
            />
          )}
        </ButtonGroup>
      </Flex>
      <Flex direction="column" align="center">
        <Flex w="100%" mb="2rem">
          <Text as="span" mr="auto">
            <Text as="span" fontWeight="bold" mr="0.25rem">
              Descrição:
            </Text>
            {jclass.description}
          </Text>
        </Flex>
        {isLoading ? (
          <Flex justify="center">
            <Spinner />
          </Flex>
        ) : error ? (
          <Flex justify="center">Falha ao obter dados dos usuários.</Flex>
        ) : (
          <Table size="sm">
            <Thead>
              <Th>Aluno</Th>
              <Th isNumeric />
            </Thead>
            <Tbody>
              {data.map((student) => (
                <Tr>
                  <Td>
                    <Flex align="center">
                      <Avatar
                        size="sm"
                        name={`${student.first_name} ${student.last_name}`}
                        bg={useColorModeValue('blackbelt.500', 'blackbelt.200')}
                        color={useColorModeValue('gray.50', 'gray.800')}
                        mr="0.5rem"
                      />
                      <Text>
                        {student.first_name} {student.last_name}
                      </Text>
                    </Flex>
                  </Td>
                  <Td isNumeric>
                    {jclass.students_id.includes(student.id) ? (
                      <Tag variant="solid" colorScheme="teal">
                        Presente
                      </Tag>
                    ) : (
                      <Tag variant="solid" colorScheme="red">
                        Ausente
                      </Tag>
                    )}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        )}
        {isWideVersion ? (
          <Button
            variant="outline"
            colorScheme="red"
            mt="3rem"
            mr="auto"
            size="sm"
            leftIcon={<Icon as={IoTrashOutline} />}
            onClick={onRemove}
          >
            Remover Aula
          </Button>
        ) : (
          <IconButton
            icon={<Icon as={IoTrashOutline} fontSize="xl" />}
            aria-label="Remover"
            variant="outline"
            colorScheme="red"
            size="sm"
            mt="3rem"
            mr="auto"
            onClick={onRemove}
          />
        )}
      </Flex>
    </MainContainer>
  );
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const classId = ctx.query.id;
  const api = setupApiClient(ctx);
  const response = await api.get(`/classes/${classId}`);
  const jclass = response.data;

  return {
    props: { jclass },
  };
});
