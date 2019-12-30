import { ITEM_STATE_CHANGED } from '../types';

const itemStateChanged = (itemName, newState) => ({
  type: ITEM_STATE_CHANGED,
  payload: {
    itemName,
    newState,
  },
});
export default itemStateChanged;
