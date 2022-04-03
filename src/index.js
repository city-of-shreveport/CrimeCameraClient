import './assets/css/index.css';
import './assets/css/videoplayer.css';
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
