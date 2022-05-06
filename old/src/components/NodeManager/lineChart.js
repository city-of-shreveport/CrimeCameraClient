import React from 'react';
import { Line } from 'react-chartjs-2';
import { defaults } from 'react-chartjs-2';

defaults.animation = false;

const data = {
  labels: ['11:00', '11:15', '11:30', '11:45', '12:00', '12:15', '12:30', '12:45'],
  datasets: [
    {
      label: 'CPU',
      data: [22, 45, 32, 56, 64, 70, 75, 76],
      fill: false,
      backgroundColor: 'Blue',
      borderColor: 'Blue',
    },
    {
      label: 'Memory',
      data: [30, 35, 32, 36, 34, 40, 43, 42],
      fill: false,
      backgroundColor: 'Red',
      borderColor: 'Red',
    },
    {
      label: 'CPU Current',
      data: [54, 45, 34, 54, 64, 34, 54, 65],
      fill: false,
      backgroundColor: 'Green',
      borderColor: 'Green',
    },
    {
      label: 'CPU Current User',
      data: [34, 65, 67, 68, 65, 55, 53, 20],
      fill: false,
      backgroundColor: 'Purple',
      borderColor: 'Purple',
    },
  ],
};

const options = {
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

const LineChart = () => (
  <>
    <Line data={data} options={options} />
  </>
);

export default LineChart;
