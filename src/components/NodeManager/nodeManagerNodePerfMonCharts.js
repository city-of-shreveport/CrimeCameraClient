import Modal from 'react-bootstrap/Modal';
import React, { useContext } from 'react';
import moment from 'moment';
import { GlobalContext } from '../../contexts/globalContext';
import { Line } from 'react-chartjs-2';
import { defaults } from 'react-chartjs-2';

defaults.animation = false;
defaults.font.size = 16;
defaults.font.color = 'white';

export default function NodeManagerSystemInfoModal() {
  const [state, dispatch] = useContext(GlobalContext);
  let chartLables = [];
  let currentLoad = [];
  let mem = [];
  let fsSize = [];
  let cputemp = [];

  const handleNodeChartModalClose = () =>
    dispatch({
      type: 'updateState',
      payload: { nodeSettingsChartPerfMonModal: false },
    });

  // eslint-disable-next-line
  state.currentNodePerfmon.map((currentNodeStat, i) => {
    let createdTime = moment(currentNodeStat.createdAt).format('HH:mm');
    currentLoad.push(currentNodeStat.currentLoad.currentLoad.toFixed(2));
    mem.push((currentNodeStat.mem.used / currentNodeStat.mem.total).toFixed(2) * 100);
    fsSize.push((currentNodeStat.fsSize[0].used / currentNodeStat.fsSize[0].size).toFixed(2) * 100);
    cputemp.push(currentNodeStat.cpuTemperature.main);
    chartLables.push(createdTime);
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
        label: 'Memory',
        data: mem,
        fill: false,
        backgroundColor: 'Purple',
        borderColor: 'Purple',
      },
    ],
  };
  const dataLoad = {
    labels: chartLables,
    datasets: [
      {
        label: 'CurrentLoad',
        data: currentLoad,
        fill: false,
        backgroundColor: 'rgba(0, 255, 25, 1)',
        borderColor: 'rgba(0, 255, 25, 1)',
      },
    ],
  };
  const dataCPUTemp = {
    labels: chartLables,
    datasets: [
      {
        label: 'CPU Temp',
        data: cputemp,
        fill: true,
        backgroundColor: 'rgba(0, 0, 200, 0.6)',
      },
    ],
  };
  const dataFsSize = {
    labels: chartLables,
    datasets: [
      {
        label: 'Drive Space',
        data: fsSize,
        fill: true,
        backgroundColor: 'rgba(0, 100, 200, 0.6)',
      },
    ],
  };
  return (
    <Modal
      dialogClassName="custom-modal-sysInfo"
      show={state.nodeSettingsChartPerfMonModal}
      onHide={() => handleNodeChartModalClose()}
      centered
      size="lg"
    >
      <div className="NodePerfMonLineChartDiv">
        <Line data={dataLoad} options={options} />;
      </div>
      <div className="NodePerfMonLineChartDiv">
        <Line data={data} options={options} />;
      </div>
      <div className="NodePerfMonLineChartDiv">
        <Line data={dataCPUTemp} options={options} />;
      </div>
      <div className="NodePerfMonLineChartDiv">
        <Line data={dataFsSize} options={options} />;
      </div>
    </Modal>
  );
}
