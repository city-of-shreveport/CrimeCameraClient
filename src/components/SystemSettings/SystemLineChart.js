import React, { useContext } from 'react';
import { Line } from 'react-chartjs-2';
import { defaults } from 'react-chartjs-2';
// import Moment from 'react-moment';
import moment from 'moment';
import { GlobalContext } from '../../contexts/globalContext';
import tryValue from '../../helperFunctions';

defaults.animation = false;
defaults.font.size = 16;
defaults.font.color = 'white';

export default function LineChart() {
  const [state] = useContext(GlobalContext);

  // let memrss = [];
  let chartLables = [];
  let accepted = [];
  let active = [];
  let idle = [];
  let rtmp = [];
  let http = [];
  let ws = [];

  // eslint-disable-next-line
  tryValue(() => {
  state.restreamerServerStats.map((streamStat, i) => {
    let createdTime = moment(streamStat.createdAt).format('HH:mm');
    chartLables.push(createdTime);
    accepted.push(streamStat.clients.accepted);
    active.push(streamStat.clients.active);
    idle.push(streamStat.clients.idle);
    rtmp.push(streamStat.clients.rtmp);

    http.push(streamStat.clients.http);
    ws.push(streamStat.clients.ws);
  });
})
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
        label: 'rtmp',
        data: rtmp,
        fill: false,
        backgroundColor: 'Green',
        borderColor: 'Green',
      },
      {
        label: 'http',
        data: http,
        fill: false,
        backgroundColor: 'Purple',
        borderColor: 'Purple',
      },
      {
        label: 'ws',
        data: ws,
        fill: false,
        backgroundColor: 'Cyan',
        borderColor: 'Cyan',
      },
    ],
  };
  return <Line data={data} options={options} />;
}
