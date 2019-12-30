import reduce from 'lodash/fp/reduce';

const reduceReducers = (reducers) => (state = {}, action) => reduce((acc, red) => red(acc, action), state)(reducers);
export default reduceReducers;
