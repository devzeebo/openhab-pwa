import React from 'react';
import { Provider } from 'react-redux';
import Container from '@material-ui/core/Container';

/* eslint-disable-next-line */
import auth from '../secret.json';

import store from './redux/store';
import { setUsername, setPassword, setUrl } from './functions/config';
import ItemsListView from './components/organisms/ItemsListView';

setUsername(auth.user);
setPassword(auth.password);
setUrl('https://openhab.ericsiebeneich.com');

const App = () => (
  <Provider store={store}>
    <Container maxWidth="sm">
      <ItemsListView />
    </Container>
  </Provider>
);
export default App;
