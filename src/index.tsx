import React from 'react';
import ReactDOM from 'react-dom';
import { store } from 'Redux/Store';
import { Provider } from 'react-redux';
import App from './App';
import { ConfigProvider } from 'antd';
import trTR from 'antd/es/locale/tr_TR';
import './index.less';

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider locale={trTR}>
      <Provider store={store}>
        <App />
      </Provider>
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
