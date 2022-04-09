import React, { useContext } from 'react';
import { Bar } from 'react-chartjs-2';
import { defaults } from 'react-chartjs-2';
// import Moment from 'react-moment';
import moment from 'moment';
import { GlobalContext } from '../../contexts/globalContext';
defaults.animation = false;
defaults.font.size = 16;
defaults.font.color = 'white';


export default function LineChart() {
  const [state] = useContext(GlobalContext);
  let dataSets = [];
  let labels = [];
  let cputemp = [];
  let chartLables = [];
  let currentLoad = [];
  let mem = [];
  let fsSize = [];
  // eslint-disable-next-line
  state.servers.map((server, i) => {
    labels.push(server);

    fetch('http://rtcc-server.shreveport-it.org:3000/api/perfmons/' + server)
      .then((response) => response.json())
      // eslint-disable-next-line
      .then((json) => {
        json.map((streamStat, i) => {
          let createdTime = moment(streamStat.createdAt).format('HH:mm');
          currentLoad.push(streamStat.currentLoad.currentLoad.toFixed(2));
          mem.push((streamStat.mem.used / streamStat.mem.total).toFixed(2) * 100);
          fsSize.push((streamStat.fsSize[0].used / streamStat.fsSize[0].size).toFixed(2) * 100);
          cputemp.push(streamStat.cpuTemperature.main);
        });
      });
  });

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            fontColor: 'white',
            beginAtZero: true,
          },
        },
      ],
    },
    maintainAspectRatio: false,
  };

  const data = {
    labels: chartLables,
    datasets: [
      {
        label: 'CurrentLoad',
        data: currentLoad,
        fill: false,
        backgroundColor: 'rgba(0, 255, 25, 1)',
        borderColor: 'rgba(0, 255, 25, 1)',
      },
      {
        label: 'Memory',
        data: mem,
        fill: false,
        backgroundColor: 'Purple',
        borderColor: 'Purple',
      },

      {
        label: 'CPU Temp',
        data: cputemp,
        fill: true,
        backgroundColor: 'rgba(0, 0, 200, 0.6)',
      },
    ],
  };
  return <Bar data={data} options={options} />;
}
