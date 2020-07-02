import React from 'react';
import ReactDOM from 'react-dom';
import { store } from 'Redux/Store';
import { Provider } from 'react-redux';
import App from './App';
import { sliceTypes } from 'Redux/Helpers/SliceTypes';
import { ConfigProvider } from 'antd';
import trTR from 'antd/es/locale/tr_TR';
import './index.less';
import Api from 'Util/Api';

store.subscribe(() => {
  Api.defaults.headers.common.Authorization = `Bearer ${
    store.getState()[sliceTypes.auth].userDetail.response?.token
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
