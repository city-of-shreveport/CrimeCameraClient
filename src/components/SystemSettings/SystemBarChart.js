import { Bar } from 'react-chartjs-2';
import { defaults } from 'react-chartjs-2';

defaults.animation = false;
defaults.font.size = 16;
defaults.font.color = 'white';

const data = {
  labels: [
    'Server001',
    'Server002',
    'Server003',
    'Server004',
    'Server005',
    'Server006',
    'Client001',
    'Client002',
    'Client003',
  ],
  datasets: [
    {
      label: 'CPU',
      data: [12, 19, 3, 5, 2, 3, 12, 45, 32],
      backgroundColor: 'rgb(255, 99, 132)',
    },
    {
      label: 'MEM',
      data: [2, 3, 20, 5, 1, 4, 4, 2, 1],
      backgroundColor: 'rgb(54, 162, 235)',
    },
    {
      label: 'DISK',
      data: [3, 10, 13, 15, 22, 30, 33, 12, 9],
      backgroundColor: 'rgb(75, 192, 192)',
    },
  ],
};

// eslint-disable-next-line
// const data2 = {
//   labels: [
//     'Restreamer001',
//     'Restreamer002',
//     'Restreamer003',
//     'Restreamer004',
//     'Restreamer005',
//     'Restreamer006',
//     'Mongo001',
//     'Mongor002',
//   ],
//   datasets: [
//     {
//       label: 'CPU',
//       data: [12, 19, 3, 5, 2, 3, 12, 32],
//       backgroundColor: 'rgb(255, 99, 132)',
//     },
//     {
//       label: 'MEM',
//       data: [2, 3, 20, 5, 1, 4, 4, 1],
//       backgroundColor: 'rgb(54, 162, 235)',
//     },
//     {
//       label: 'DISK',
//       data: [3, 10, 13, 15, 22, 30, 33, 9],
//       backgroundColor: 'rgb(75, 192, 192)',
//     },
//   ],
// };

const options = {
  maintainAspectRatio: true,
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};
const VerticalBar = () => <Bar data={data} options={options} width={140} height={40} />;

export default VerticalBar;
