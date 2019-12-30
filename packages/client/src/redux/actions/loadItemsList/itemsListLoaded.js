import { ITEM_LIST_LOADED } from '../types';

const itemsListLoaded = (itemsList) => ({
  type: ITEM_LIST_LOADED,
  payload: itemsList,
});
export default itemsListLoaded;
