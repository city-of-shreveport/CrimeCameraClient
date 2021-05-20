import React from 'react';
import { Line } from 'react-chartjs-2';
import { defaults } from 'react-chartjs-2';
defaults.animation = false;
const data = {
  labels: ['11:00', '11:15', '11:30', '11:45', '12:00', '12:15', '12:30', '12:45'],
  datasets: [
    {
      label: 'Active Streams',
      data: [22, 45, 32, 56, 22, 45, 32, 56],
      fill: false,
      backgroundColor: 'Blue',
      borderColor: 'Blue',
    },
    {
      label: 'Idle Streams',
      data: [30, 35, 32, 36, 30, 35, 32, 36],
      fill: false,
      backgroundColor: 'Red',
      borderColor: 'Red',
    },
    {
      label: 'RTMP Connection',
      data: [54, 45, 34, 54, 54, 45, 34, 54],
      fill: false,
      backgroundColor: 'Green',
      borderColor: 'Green',
    },
    {
      label: 'WS Connection',
      data: [34, 65, 67, 68, 34, 65, 67, 68],
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
