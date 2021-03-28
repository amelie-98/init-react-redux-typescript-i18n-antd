import React, { useCallback, useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { Link, useHistory } from 'react-router-dom';

import Test from './components/test';
import './App.css';
import { StateTypes } from './reducers';
import { changeSonyToPSVITA, changeSonyToPS5 } from './actions';
import ROUTES, { RenderRoutes } from './components/Routes';
import service from './services/helper';

export default () => {
  const { sony } = useSelector((state: StateTypes) => state, shallowEqual);

  const dispatch: Dispatch<any> = useDispatch();

  const testUseDispatchPSVITA = useCallback(() => dispatch(changeSonyToPSVITA('PSVITA')), [dispatch]);

  const testUseDispatchPS5 = useCallback(() => dispatch(changeSonyToPS5('PS5')), [dispatch]);

  const {
    NODE_ENV,
    REACT_APP_TEST,
    REACT_APP_TITLE,
    REACT_APP_DESCRIPTION,
    REACT_APP_DEV_MODE,
    REACT_APP_PRO_MODE,
  } = process.env;

  const history = useHistory();

  useEffect(() => {
    console.log('START useEffect');

    const fetchData = async () => {
      // test call success
      const response1 = await service('post', 'https://6060980b04b05d0017ba2bd3.mockapi.io/test', { name: 'test123' });

      // test call fail
      const response2 = await service('get', 'https://6060980b04b05d0017ba2bd3.mockapi.io/test/fail', null);

      console.log(response1);

      if (response2) {
        console.log('không có lỗi xảy ra');
      } else {
        console.log('đã xảy ra lỗi và lỗi là :', response2);
      }
    };

    fetchData();

    console.log('END useEffect');
  }, []);

  return (
    <div className="App">
      <Test text="test" />
      <h1>{sony}</h1>

      <button onClick={() => testUseDispatchPSVITA()} type="button">
        Test useDispatch PS VITA
      </button>

      <button onClick={() => testUseDispatchPS5()} type="button">
        Test useDispatch PS5
      </button>

      <h1>{REACT_APP_TEST}</h1>
      <h1>{REACT_APP_TITLE}</h1>
      <h3>{REACT_APP_DESCRIPTION}</h3>

      {NODE_ENV === 'development' ? REACT_APP_DEV_MODE : REACT_APP_PRO_MODE}

      <h1>Test Router</h1>

      <Link to="/">Root</Link>

      <Link to="/page1">Page1</Link>

      <Link to="/page2">Page2</Link>

      <div onClick={() => history.push('/')}>Root</div>

      <div onClick={() => history.push('/page1')}>Page1</div>

      <div onClick={() => history.push('/page2')}>Page2</div>

      <RenderRoutes routes={ROUTES} />

      <h1>Test Router</h1>
    </div>
  );
};
