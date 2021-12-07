import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import dayjs from 'dayjs';
import { Line } from 'react-chartjs-2';

type Class = {
  id: number;
  master_id: number;
  students_id: number[];
  description: string;
  date: Date;
};

type ChartProps = {
  classesByDate: Class[];
};

export function AttendancePerClassChart({ classesByDate }: ChartProps) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Comparecimento por Aula',
      },
    },
  };

  const data = {
    labels: [
      dayjs(classesByDate[0]?.date).format('DD/MM/YYYY HH:mm'),
      dayjs(classesByDate[1]?.date).format('DD/MM/YYYY HH:mm'),
      dayjs(classesByDate[2]?.date).format('DD/MM/YYYY HH:mm'),
      dayjs(classesByDate[3]?.date).format('DD/MM/YYYY HH:mm'),
      dayjs(classesByDate[4]?.date).format('DD/MM/YYYY HH:mm'),
      dayjs(classesByDate[5]?.date).format('DD/MM/YYYY HH:mm'),
      dayjs(classesByDate[6]?.date).format('DD/MM/YYYY HH:mm'),
      dayjs(classesByDate[7]?.date).format('DD/MM/YYYY HH:mm'),
      dayjs(classesByDate[8]?.date).format('DD/MM/YYYY HH:mm'),
      dayjs(classesByDate[9]?.date).format('DD/MM/YYYY HH:mm'),
    ],
    datasets: [
      {
        label: 'Alunos Presentes',
        data: [
          classesByDate[0]?.students_id.length,
          classesByDate[1]?.students_id.length,
          classesByDate[2]?.students_id.length,
          classesByDate[3]?.students_id.length,
          classesByDate[4]?.students_id.length,
          classesByDate[5]?.students_id.length,
          classesByDate[6]?.students_id.length,
          classesByDate[7]?.students_id.length,
          classesByDate[8]?.students_id.length,
          classesByDate[9]?.students_id.length,
        ],
        borderColor: 'rgb(82, 82, 164)',
        backgroundColor: 'rgba(82, 82, 164, 0.5)',
        borderWidth: 1,
      },
    ],
  };

  return <Line data={data} options={options} />;
}
