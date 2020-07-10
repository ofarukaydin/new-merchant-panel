import React from 'react';
import ReactDOM from 'react-dom';
import { store } from 'Redux/store';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import trTR from 'antd/es/locale/tr_TR';
import { App } from './app';

import './index.less';

ReactDOM.render(
  <ConfigProvider locale={trTR}>
    <Provider store={store}>
      <App />
    </Provider>
  </ConfigProvider>,
  document.querySelector('#root'),
);
