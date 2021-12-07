/* eslint-disable no-param-reassign */
import { Box, Flex, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { AttendancePerClassChart } from '../components/Charts/attendancePerClass';
import { StudentsPerBeltChart } from '../components/Charts/studentsPerBelt';
import { MainContainer } from '../components/MainContainer';
import { setupApiClient } from '../services/api';
import { withSSRAuth } from '../utils/withSSRAuth';

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

type Class = {
  id: number;
  master_id: number;
  students_id: number[];
  description: string;
  date: Date;
};

type DashboardProps = {
  totalStudents: number;
  studentsPerBelt: {
    Branca: number;
    'Cinza e Branca': number;
    Cinza: number;
    'Cinza e Preta': number;
    'Amarela e Branca': number;
    Amarela: number;
    'Amarela e Preta': number;
    'Laranja e Branca': number;
    Laranja: number;
    'Laranja e Preta': number;
    'Verde e Branca': number;
    Verde: number;
    'Verde e Preta': number;
  };
  classesByDate: Class[];
};

export default function Dashboard({
  totalStudents,
  studentsPerBelt,
  classesByDate,
}: DashboardProps) {
  return (
    <MainContainer>
      <Stack spacing="1rem">
        <Box
          p={['4', '8']}
          bg={useColorModeValue('gray.50', 'gray.800')}
          borderRadius="8px"
          pb="4"
        >
          <Text textAlign="right" fontSize="lg">
            <Text as="span" fontWeight="bold" fontSize="2xl">
              {totalStudents}
            </Text>{' '}
            alunos cadastrados
          </Text>
        </Box>
        <Box
          p={['4', '8']}
          bg={useColorModeValue('gray.50', 'gray.800')}
          borderRadius="8px"
          pb="4"
        >
          <Flex maxW="600px" mx="auto">
            <StudentsPerBeltChart studentsPerBelt={studentsPerBelt} />
          </Flex>
        </Box>
        <Box
          p={['4', '8']}
          bg={useColorModeValue('gray.50', 'gray.800')}
          borderRadius="8px"
          pb="4"
        >
          <AttendancePerClassChart classesByDate={classesByDate} />
        </Box>
      </Stack>
    </MainContainer>
  );
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const api = setupApiClient(ctx);
  const response = await api.get(`/students`);
  const students = response.data as Student[];
  const response2 = await api.get(`/classes`);
  const classes = response2.data as Class[];

  const studentsPerBelt = students.reduce((groups, student) => {
    const group = groups[student.belt] || 0;
    groups[student.belt] = group + 1;
    return groups;
  }, {});

  const classesByDate = classes.sort((a, b) => (a.date < b.date ? 1 : -1));

  return {
    props: { totalStudents: students.length, studentsPerBelt, classesByDate },
  };
});
