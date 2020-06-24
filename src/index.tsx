import React from 'react';
import ReactDOM from 'react-dom';
import { store } from 'Redux/Store';
import { Provider } from 'react-redux';
import App from './App';
import { sliceTypes } from 'Redux/Helpers/SliceTypes';
import { AxiosClient } from 'edkk-redux';
import { ConfigProvider } from 'antd';
import trTR from 'antd/es/locale/tr_TR';
import './index.less';

AxiosClient.defaults.baseURL = process.env.REACT_APP_BACKEND_API_URL;
store.subscribe(() => {
  AxiosClient.defaults.headers.common.Authorization = `Bearer ${
    store.getState()[sliceTypes.AUTH].token
  }`;
});

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
