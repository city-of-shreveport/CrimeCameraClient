

import React from 'react';
import { Line } from 'react-chartjs-2';
import { defaults } from 'react-chartjs-2';
defaults.animation = false;
const data = {
  labels: ['11:00', '11:15', '11:30', '11:45', '12:00', '12:15', '12:30','12:45'],
  datasets: [
    {
      label: 'CPU',
      data: [22, 45, 32, 56,22, 45, 32, 56,],
      fill: false,
      backgroundColor: 'Blue',
      borderColor: 'Blue',
    },
        {
      label: 'Memory',
      data: [30, 35, 32, 36,30, 35, 32, 36,],
      fill: false,
      backgroundColor: 'Red',
      borderColor: 'Red',
    },
    {
      label: 'Disk',
      data: [54, 45, 34, 54, 54, 45, 34, 54,],
      fill: false,
      backgroundColor: 'Green',
      borderColor: 'Green',
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