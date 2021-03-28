import React, { Suspense } from 'react';

import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';

import App from './App';
import configureStore, { history } from './store';

import './index.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

// import i18n (needs to be bundled ;))
import './i18n/config';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Suspense fallback={null}>
        <App />
      </Suspense>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
