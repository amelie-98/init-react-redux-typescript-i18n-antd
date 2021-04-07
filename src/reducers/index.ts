import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import SonyReducer from './Sony';

export interface StateTypes {
  router: any;
  sony: any;
}

export default (history: any) => combineReducers({ router: connectRouter(history), sony: SonyReducer });
