import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import ReduxThunk from 'redux-thunk';

import itemsListReducer from '../components/organisms/ItemsListView/reducer';

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    listItems: itemsListReducer,
  }),
  composeEnhancers(
    applyMiddleware(ReduxThunk),
  ),
);

export default store;
