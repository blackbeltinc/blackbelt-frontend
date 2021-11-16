import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Select,
  SimpleGrid,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import Router from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { Input } from '../../components/Input';
import { MainContainer } from '../../components/MainContainer';
import { api, setupApiClient } from '../../services/api';
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

type StudentFormData = Omit<Student, 'id'>;

type StudentEditProps = {
  student: Student;
};

const studentFormSchema = yup.object({
  first_name: yup.string().required('O campo primeiro nome é obrigatório.'),
  last_name: yup.string().required('O campo ultimo nome é obrigatório.'),
  email: yup
    .string()
    .required('O campo e-mail é obrigatório.')
    .email('E-mail inválido.'),
  cpf: yup
    .string()
    .required('O campo cpf é obrigatório.')
    .min(14, 'Digite um CPF válido.')
    .max(14, 'Digite um CPF válido.'),
  phone: yup
    .string()
    .required('O campo telefone é obrigatório.')
    .min(14, 'Digite um telefone válido, incluindo DDD.')
    .max(15, 'Digite um telefone válido, incluindo DDD.'),
  birthdate: yup
    .date()
    .required('O campo data de nascimento é obrigatório')
    .typeError('O campo data de nascimento é obrigatório')
    .max(new Date(), 'Não é possível incluir uma data futura'),
  belt: yup.string(),
  level: yup.number(),
});

export default function StudentEdit({ student }: StudentEditProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(studentFormSchema),
    mode: 'onTouched',
    defaultValues: student,
  });

  const handleCreate: SubmitHandler<StudentFormData> = async (
    values,
    event,
  ) => {
    event.preventDefault();
    try {
      await api.put(`/students/${student.id}`, values);
      toast.success('Cadastro atualizado com sucesso!');
      Router.push('/students');
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  return (
    <MainContainer>
      <Flex mb="8" justify="space-between" w="100%">
        <Heading size="lg">Cadastrar Aluno</Heading>
      </Flex>
      <Box w="100%" as="form" onSubmit={handleSubmit(handleCreate)}>
        <Stack spacing={['6', '8']}>
          <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
            <Input
              id="first_name"
              label="PRIMEIRO NOME"
              inputType="text"
              placeholder="digite o primeiro nome"
              error={errors.first_name}
              {...register('first_name')}
            />
            <Input
              id="last_name"
              label="ULTIMO NOME"
              inputType="text"
              placeholder="digite o ultimo sobrenome"
              error={errors.last_name}
              {...register('last_name')}
            />
          </SimpleGrid>
          <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
            <Input
              id="email"
              label="E-MAIL"
              inputType="email"
              placeholder="digite o email"
              error={errors.email}
              {...register('email')}
            />
            <Input
              as={InputMask}
              id="cpf"
              label="CPF"
              inputType="text"
              placeholder={student.cpf}
              _placeholder={{
                color: useColorModeValue('gray.600', 'gray.50'),
                opacity: '100%',
              }}
              mask="999.999.999-99"
              maskChar={null}
              error={errors.cpf}
              {...register('cpf')}
            />
          </SimpleGrid>
          <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
            <Input
              as={InputMask}
              id="phone"
              label="TELEFONE"
              inputType="text"
              placeholder={student.phone}
              _placeholder={{
                color: useColorModeValue('gray.600', 'gray.50'),
                opacity: '100%',
              }}
              mask="(99) 99999-9999"
              maskChar={null}
              error={errors.phone}
              {...register('phone')}
            />
            <Input
              id="birthdate"
              label="DATA DE NASCIMENTO"
              inputType="date"
              error={errors.birthdate}
              {...register('birthdate')}
            />
          </SimpleGrid>
          <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
            <FormControl id="belt">
              <FormLabel
                fontWeight="bold"
                color={useColorModeValue('blackbelt.500', 'blackbelt.200')}
              >
                FAIXA
              </FormLabel>
              <Select
                size="sm"
                variant="flushed"
                placeholder="Selecione a Faixa"
                error={errors.belt}
                {...register('belt')}
              >
                <option value="Branca">Branca</option>
                <option value="Cinza e Branca">Cinza e Branca</option>
                <option value="Cinza">Cinza</option>
                <option value="Cinza e Preta">Cinza e Preta</option>
                <option value="Amarela e Branca">Amarela e Branca</option>
                <option value="Amarela">Amarela</option>
                <option value="Amarela e Preta">Amarela e Preta</option>
                <option value="Laranja e Branca">Laranja e Branca</option>
                <option value="Laranja">Laranja</option>
                <option value="Laranja e Preta">Laranja e Preta</option>
                <option value="Verde e Branca">Verde e Branca</option>
                <option value="Verde">Verde</option>
                <option value="Verde e Preta">Verde e Preta</option>
              </Select>
            </FormControl>
            <FormControl id="belt">
              <FormLabel
                fontWeight="bold"
                color={useColorModeValue('blackbelt.500', 'blackbelt.200')}
              >
                GRAU
              </FormLabel>
              <Select
                size="sm"
                variant="flushed"
                placeholder="Selecione o grau"
                error={errors.level}
                {...register('level')}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
              </Select>
            </FormControl>
          </SimpleGrid>
        </Stack>
        <ButtonGroup w="100%" mt="3rem" ml="auto">
          <Link href={`/students/profile?id=${student.id}`} passHref>
            <Button
              as="a"
              colorScheme="blackbelt"
              variant="outline"
              ml="auto"
              w={['calc(50% - 0.25rem)', '8rem']}
            >
              Cancelar
            </Button>
          </Link>
          <Button
            type="submit"
            isLoading={isSubmitting}
            colorScheme="blackbelt"
            w={['calc(50% - 0.25rem)', '8rem']}
          >
            Cadastrar
          </Button>
        </ButtonGroup>
      </Box>
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
