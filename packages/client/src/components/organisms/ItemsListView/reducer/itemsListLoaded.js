import keys from 'lodash/fp/keys';

import { ITEM_LIST_LOADED } from '../../../../redux/actions/types';
import reducerOfType from '../../../../redux/reducers/reducerOfType';

const itemsListLoaded = reducerOfType(ITEM_LIST_LOADED, (state, itemsList) => ({
  ...state,
  items: {
    all: keys(itemsList),
    ...itemsList,
  },
}));
export default itemsListLoaded;
