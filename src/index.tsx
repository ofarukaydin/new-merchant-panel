import React from 'react';
import ReactDOM from 'react-dom';
import { store } from 'Redux/Store';
import { Provider } from 'react-redux';
import App from './App';
import './index.less';
import 'tailwind.css';
import { sliceTypes } from 'Redux/Helpers/SliceTypes';
import { AxiosClient } from 'edkk-redux';

AxiosClient.defaults.baseURL = process.env.REACT_APP_BACKEND_API_URL;
store.subscribe(() => {
  AxiosClient.defaults.headers.common.Authorization = `Bearer ${
    store.getState()[sliceTypes.AUTH].token
  }`;
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
