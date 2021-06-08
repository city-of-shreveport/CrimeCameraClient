import React, { useContext } from 'react';
import { GlobalContext } from '../../contexts/globalContext';
import { Bar } from 'react-chartjs-2';
import { defaults } from 'react-chartjs-2';

defaults.animation = false;

const options = {
  indexAxis: 'y',
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
  const [state] = useContext(GlobalContext);

  const data = {
    labels: ['Memory', 'CPU avgLoad', 'CPU currentLoad', 'CPU currentLoadUser'],
    datasets: [
      {
        data: [
          parseFloat(state.currentNodePerfmon.mem.used / state.currentNodePerfmon.mem.total).toFixed(2) * 100,
          state.currentNodePerfmon.currentLoad.avgLoad * 100,
          state.currentNodePerfmon.currentLoad.currentLoad * 100,
          state.currentNodePerfmon.currentLoad.currentLoadUser * 100,
        ],
        backgroundColor: ['Red', 'Blue', 'Green', 'Purple'],
        borderColor: ['rgba(255, 255, 255, 1)'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <Bar data={data} options={options} title="NodeBarChart" />
    </>
  );
}
