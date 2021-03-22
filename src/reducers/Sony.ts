export const CHANGE_PS = 'CHANGE_PS';

const initialState = 'PS4';

export interface BaseAction {
  type: string;
  payload: string;
}

export default (state = initialState, action: BaseAction) => {
  switch (action.type) {
    case CHANGE_PS:
      return action.payload;

    default:
      return state;
  }
};
