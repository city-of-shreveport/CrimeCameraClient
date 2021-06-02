import './css/index.css';
import './css/videoplayer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-calendar/dist/Calendar.css';
import App from './components/app';
import ReactDOM from 'react-dom';
import { GlobalContextProvider } from './contexts/globalContext';

ReactDOM.render(
  <GlobalContextProvider>
    <App />
  </GlobalContextProvider>,
  document.getElementById('root')
);

const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};
const axios = require('axios');
const si = require('systeminformation');
var os = require("os");
var hostname = os.hostname();

const sendPerfMon = async () => {
  var perfMon = {
    node: 'CrimeCameraClient',
    currentLoad: {
      cpus: [],
    },
    mem: {},
    cpuTemperature: {},
    fsSize: [],
  };
  
  await si.currentLoad(function (data) {
    perfMon.currentLoad.cpus = [];
    perfMon.currentLoad.avgLoad = data.avgLoad;
    perfMon.currentLoad.currentLoad = data.currentLoad;
    perfMon.currentLoad.currentLoadUser = data.currentLoadUser;
  
    for (var i = 0; i < data.cpus.length; i++) {
      perfMon.currentLoad.cpus.push(data.cpus[i].load);
    }
  });
  
  await si.mem(function (data) {
    perfMon['mem']['total'] = data.total;
    perfMon['mem']['free'] = data.free;
    perfMon['mem']['used'] = data.used;
    perfMon['mem']['available'] = data.available;
  });
  
  await si.cpuTemperature(function (data) {
    perfMon['cpuTemperature'].main = data.main;
  });
  
  await si.fsSize(function (data) {
    for (var i = 0; i < data.length; i++) {
      perfMon.fsSize.push({
        fs: data[i].fs,
        type: data[i].type,
        size: data[i].size,
        used: data[i].used,
        available: data[i].available,
        mount: data[i].mount,
      });
    }
  });
  axios.post(`http://10.10.10.10:3001/api/perfmons`, perfMon);
  }
  
  setInterval(() => {
    sendPerfMon()
  }, 60000);
reportWebVitals();
