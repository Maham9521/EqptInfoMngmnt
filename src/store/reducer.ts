import { AppActions, SET_ITEM } from '../store/actions';

interface AppState {
  item: string;
}

const initialState: AppState = {
  item: ''
};

const appReducer = (state = initialState, action: AppActions): AppState => {
  switch (action.type) {
    case SET_ITEM:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
};

export default appReducer;
