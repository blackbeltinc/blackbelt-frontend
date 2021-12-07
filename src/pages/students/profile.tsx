import {
  Avatar,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Icon,
  IconButton,
  Table,
  Tbody,
  Text,
  Th,
  Tr,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import dayjs from 'dayjs';
import Link from 'next/link';
import router from 'next/router';
import { FiEdit } from 'react-icons/fi';
import { IoArrowBack, IoTrashOutline } from 'react-icons/io5';
import { toast } from 'react-toastify';
import { MainContainer } from '../../components/MainContainer';
import { setupApiClient } from '../../services/api';
import { withSSRAuth } from '../../utils/withSSRAuth';

type Student = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  cpf: string;
  phone: string;
  birthdate: Date;
  belt: string;
  level: number;
};

type ProfileProps = {
  student: Student;
};

export default function StudentProfile({ student }: ProfileProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  function onEdit() {
    router.push({ pathname: '/students/edit', query: { id: student.id } });
  }

  async function onRemove() {
    try {
      if (
        window.confirm(
          'Tem certeza que deseja remover esse aluno? Essa ação é irreversível.',
        )
      ) {
        const api = setupApiClient();
        await api.delete(`/students/${student.id}`);
        toast.success('Aluno removido com sucesso.');
        router.push('/students');
      }
    } catch (err) {
      toast.error(err.response.data.message);
    }
  }

  return (
    <MainContainer>
      <Flex mb="8" justify="space-between" w="100%">
        <Heading size="lg">Perfil do Aluno</Heading>
        <ButtonGroup>
          <Link href="/students" passHref>
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
        <Avatar
          size="2xl"
          name={`${student.first_name} ${student.last_name}`}
          bg={useColorModeValue('blackbelt.500', 'blackbelt.200')}
          color={useColorModeValue('gray.50', 'gray.800')}
          mb="1.5rem"
        />
        <Text fontSize="xl" mb="2rem">
          {student.first_name} {student.last_name}
        </Text>
        <Table>
          <Tbody>
            <Tr>
              <Th>FAIXA</Th>
              <Th>{student.belt}</Th>
            </Tr>
            <Tr>
              <Th>GRAU</Th>
              <Th>{student.level}</Th>
            </Tr>
            <Tr>
              <Th>CPF</Th>
              <Th>{student.cpf}</Th>
            </Tr>
            <Tr>
              <Th>TELEFONE</Th>
              <Th>{student.phone}</Th>
            </Tr>
            <Tr>
              <Th>EMAIl</Th>
              <Th>{student.email}</Th>
            </Tr>
            <Tr>
              <Th>DATA DE NASCIMENTO</Th>
              <Th>{dayjs(student.birthdate).format('DD/MM/YYYY')}</Th>
            </Tr>
          </Tbody>
        </Table>
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
            Remover Aluno
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
  const studentId = ctx.query.id;
  const api = setupApiClient(ctx);
  const response = await api.get(`/students/${studentId}`);
  const student = response.data;

  return {
    props: { student },
  };
});
