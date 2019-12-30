import { ITEM_LOADED } from '../types';

const itemsListLoaded = (item) => ({
  type: ITEM_LOADED,
  payload: item,
});
export default itemsListLoaded;
