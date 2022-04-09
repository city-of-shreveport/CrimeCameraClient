import React from 'react';
import { Bar } from 'react-chartjs-2';
import { defaults } from 'react-chartjs-2';

defaults.animation = false;



const data = {
  labels: ['CPU', 'Memory', 'Drive'],
  datasets: [
    {
      label: 'FrontEnd001',
      data: [22, 45, 32, 56],
      fill: false,
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      borderColor: 'rgba(255, 99, 132, 1)',
    },
    {
      label: 'FrontEnd002',
      data: [30, 35, 32, 36],
      fill: false,
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
      borderColor: 'rgba(54, 162, 235, 1)',
    },
    {
      label: 'FrontEnd003',
      data: [54, 45, 34, 54],
      fill: false,
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
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
const HorizontalBarChart2 = () => (
  <>
    <Bar data={data} options={options} />
  </>
);

export default HorizontalBarChart2;
