import getList from '../../../functions/items/getList';
import itemsListLoaded from './itemsListLoaded';

const loadItemsList = () => ((dispatch) => getList()
  .then((itemsList) => dispatch(itemsListLoaded(itemsList)))
);

export default loadItemsList;
