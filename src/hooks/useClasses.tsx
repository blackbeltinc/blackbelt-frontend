import { useQuery } from 'react-query';
import { api } from '../services/api';

type Class = {
  id: number;
  master_id: number;
  date: Date;
  students_id: number[];
  description: string;
};

export async function getClasses(): Promise<Class[]> {
  const classes = await api
    .get('/classes')
    .then((response) => response.data as Class[]);
  return classes;
}

export function useClasses() {
  return useQuery('classes', () => getClasses(), {
    staleTime: 1000 * 5,
  });
}
