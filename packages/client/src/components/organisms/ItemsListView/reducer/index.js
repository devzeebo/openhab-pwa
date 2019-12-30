import reduceReducers from '../../../../redux/reducers/reduceReducers';
import itemsListLoaded from './itemsListLoaded';
import itemLoaded from './itemLoaded';
import itemStateChanged from './itemStateChanged';

const reducers = [
  itemsListLoaded,
  itemLoaded,
  itemStateChanged,
];

const masterReducer = reduceReducers(reducers);
export default masterReducer;
