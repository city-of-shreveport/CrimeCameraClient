import React from 'react';
import { Bar } from 'react-chartjs-2';
import { defaults } from 'react-chartjs-2';
defaults.animation = false;
const data = {
  labels: ['Root', 'Video', 'Buddy'],
  datasets: [
    {
      data: [20, 95, 82],
      backgroundColor: ['Red', 'Blue', 'Green', 'Purple'],
      borderColor: ['rgba(255, 255, 255, 1)'],
      borderWidth: 1,
    },
  ],
};

const options = {
  indexAxis: 'y',
  // Elements options apply to all of the options unless overridden in a dataset
  // In this case, we are setting the border of each horizontal bar to be 2px wide
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: { display: false },
  },
  scales: {
    y: {
      min: 0,
      max: 100,
    },
  },
};

const HorizontalBarChart2 = () => (
  <>
    <Bar data={data} options={options} />
  </>
);

export default HorizontalBarChart2;
