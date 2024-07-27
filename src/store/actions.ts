export const SET_ITEM = 'SET_ITEM';

interface SetItemAction {
  type: typeof SET_ITEM;
  payload: string;
}

export type AppActions = SetItemAction;
