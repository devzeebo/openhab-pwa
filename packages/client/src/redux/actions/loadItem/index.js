import getItem from '../../../functions/items/getItem';
import itemsListLoaded from './itemLoaded';

const loadItemsList = (itemName) => ((dispatch) => getItem(itemName)
  .then((item) => dispatch(itemsListLoaded(item)))
);

export default loadItemsList;
