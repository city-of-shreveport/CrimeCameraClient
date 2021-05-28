import React, { useContext } from 'react';
import { GlobalContext } from '../contexts/globalContext';

import { Bar } from 'react-chartjs-2';
import { defaults } from 'react-chartjs-2';
defaults.animation = false;
const data = {
  labels: ['Memory', 'CPU avgLoad', 'CPU currentLoad', 'CPU currentLoadUser'],
  datasets: [
    {
      data: [75, 50, 34, 65],
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


export default function HorizontalBarChart() {
  const [state,] = useContext(GlobalContext);
  const getPerfmonData = () =>
  fetch('https://crime-camera-system-api.shreveport-it.org/api/perfmons/' + state.currentNodeInfo.name+'/?token=IgyJtHFsZbQdLY5Cy26HRkn7HOqcJx5')
      .then((response) => response.json())
      .then((json) => {
        const rowLen = json.length;
        json.map((perfmon, i) => (
        ((rowLen === i + 1) ? console.log(perfmon.cpuTemperature.main): '')

  ))
      })
      getPerfmonData()
  setInterval(() => {
    getPerfmonData()
  }, 10000);
return(
  <>
      <Bar data={data} options={options} />
    </>

)


}


