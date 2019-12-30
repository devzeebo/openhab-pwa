const reducerOfType = (type, reducer) => (state, action) => (action.type === type
  ? reducer(state, action.payload)
  : state);
export default reducerOfType;
