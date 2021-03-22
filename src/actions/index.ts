import { CHANGE_PS } from '../reducers/Sony';

export const changeSonyToPSVITA = (product: string) => ({
  type: CHANGE_PS,
  payload: product,
});

export const changeSonyToPS5 = (product: string) => ({
  type: CHANGE_PS,
  payload: product,
});
