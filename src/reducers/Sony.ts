import { createReducer } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { changeSonyToPSVITA, changeSonyToPS5 } from '../actions';

const initialState = 'PS4';

export interface BaseAction {
  type: string;
  payload: string;
}

export default createReducer(initialState, (builder: any) => builder
  .addCase(changeSonyToPSVITA, (_: any, action: any) => action.payload) // if initialState not object
  .addCase(changeSonyToPS5, (state: any, action: any) => {
    // eslint-disable-next-line no-param-reassign
    state.name = action.payload; // if initialState not object
  }));
