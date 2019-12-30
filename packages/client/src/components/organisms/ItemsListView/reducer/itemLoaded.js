import flow from 'lodash/fp/flow';
import get from 'lodash/fp/get';
import defaultTo from 'lodash/fp/defaultTo';
import concat from 'lodash/fp/concat';
import uniq from 'lodash/fp/uniq';
import merge from 'lodash/merge';

import { ITEM_LOADED } from '../../../../redux/actions/types';
import reducerOfType from '../../../../redux/reducers/reducerOfType';

const itemLoaded = reducerOfType(ITEM_LOADED, (state, item) => merge(
  state,
  {
    items: {
      all: (flow(
        get('items.all'),
        defaultTo([]),
        concat(item.name),
        uniq,
      )(state)),
      [item.name]: item,
    },
  },
));
export default itemLoaded;
