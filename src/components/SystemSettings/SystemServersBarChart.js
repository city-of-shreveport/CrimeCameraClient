import React from 'react';
import { Bar } from 'react-chartjs-2';
import { defaults } from 'react-chartjs-2';

defaults.animation = false;


const data = {
  labels: ['CPU', 'Memory', 'Drive'],
  datasets: [
    {
      label: 'Restreamer001',
      data: [22, 45, 32, 56],
      fill: false,
      backgroundColor: 'rgba(255, 159, 64, 0.5)',
      borderColor: 'Blue',
    },
    {
      label: 'Restreamer002',
      data: [30, 35, 32, 36],
      fill: false,
      backgroundColor: 'rgba(153, 102, 255, 0.5)',
      borderColor: 'Red',
    },
    {
      label: 'Restreamer003',
      data: [54, 45, 34, 54],
      fill: false,
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
      borderColor: 'Green',
    },
    {
      label: 'Restreamer004',
      data: [34, 65, 67, 68],
      fill: false,
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
      borderColor: 'Purple',
    },
    {
      label: 'BackEnd001',
      data: [22, 45, 32, 56],
      fill: false,
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
      borderColor: 'Blue',
    },
    {
      label: 'BackEnd002',
      data: [30, 35, 32, 36],
      fill: false,
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      borderColor: 'Red',
    },
    {
      label: 'BackEnd003',
      data: [54, 45, 34, 54],
      fill: false,
      backgroundColor: 'rgba(255, 159, 156, 0.5)',
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
