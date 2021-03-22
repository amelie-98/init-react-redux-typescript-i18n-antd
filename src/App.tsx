import React, { useCallback } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { Dispatch } from 'redux';

import Test from './components/test';
import './App.css';
import { StateTypes } from './reducers';
import { changeSonyToPSVITA, changeSonyToPS5 } from './actions';

export default () => {
  const { sony } = useSelector((state: StateTypes) => state, shallowEqual);

  const dispatch: Dispatch<any> = useDispatch();

  const testUseDispatchPSVITA = useCallback(() => dispatch(changeSonyToPSVITA('PSVITA')), [dispatch]);

  const testUseDispatchPS5 = useCallback(() => dispatch(changeSonyToPS5('PS5')), [dispatch]);

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
    </div>
  );
};
