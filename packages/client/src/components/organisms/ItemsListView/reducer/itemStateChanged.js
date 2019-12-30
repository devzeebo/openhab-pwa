import reducerOfType from '../../../../redux/reducers/reducerOfType';
import { ITEM_STATE_CHANGED } from '../../../../redux/actions/types';

const itemStateChanged = reducerOfType(ITEM_STATE_CHANGED, (state, changeEvent) => ({
  ...state,
  items: {
    ...state.items,
    [changeEvent.itemName]: {
      ...state.items[changeEvent.itemName],
      state: changeEvent.newState,
    },
  },
}));
export default itemStateChanged;
