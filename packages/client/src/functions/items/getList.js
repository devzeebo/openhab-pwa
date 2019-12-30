import flow from 'lodash/fp/flow';
import get from 'lodash/fp/get';
import keyBy from 'lodash/fp/keyBy';
import axios from '../axios';

const getItemsList = () => axios.get('items')
  .then(flow(
    get('data'),
    keyBy('name'),
  ));
export default getItemsList;
