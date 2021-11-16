import { useQuery } from 'react-query';
import { api } from '../services/api';

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

export async function getStudents(): Promise<Student[]> {
  const students = await api
    .get('/students')
    .then((response) => response.data as Student[]);
  return students;
}

export function useStudents() {
  return useQuery('students', () => getStudents(), {
    staleTime: 1000 * 5,
  });
}
