import React from 'react';
import { Bar } from 'react-chartjs-2';
import { defaults } from 'react-chartjs-2';
defaults.animation = false;
const data = {
  labels: ['cpu'],
  datasets: [
    {
      data: [50],
      backgroundColor: ['rgba(255, 15, 132, 0.5)'],
      borderColor: ['rgba(255, 15, 132, 1)'],
    },
  ],
};

const options = {
  indexAxis: 'y',
  responsive: true,
  plugins: {
    legend: { display: false },
  },
};

const SingleItemBarChart = () => (
  <>
    <Bar data={data} options={options} height={'30%'} />
  </>
);

export default SingleItemBarChart;
