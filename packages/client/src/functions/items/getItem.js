import get from 'lodash/fp/get';
import axios from '../axios';

const getItem = (itemName) => axios.get(`items/${itemName}`)
  .then(get('data'));
export default getItem;
