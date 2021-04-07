import { createAction } from '@reduxjs/toolkit';

const CHANGE_PS5 = 'CHANGE_PS5';
const CHANGE_PSVITA = 'CHANGE_PSVITA';

export const changeSonyToPSVITA = createAction<string>(CHANGE_PS5);
export const changeSonyToPS5 = createAction<string>(CHANGE_PSVITA);
