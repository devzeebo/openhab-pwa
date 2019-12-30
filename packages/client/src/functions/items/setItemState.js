import axios from '../axios';

const setItemState = (itemName, state) => axios.post(`items/${itemName}`, state, {
  headers: {
    'Content-Type': 'text/plain',
  },
});

export default setItemState;
