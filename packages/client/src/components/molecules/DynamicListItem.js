import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import flow from 'lodash/fp/flow';
import get from 'lodash/fp/get';
import isEqual from 'lodash/isEqual';

import ListItem from '@material-ui/core/ListItem';

import SwitchListItem from '../atoms/SwitchListItem';
import useEventSourceStateTracking from '../hooks/useEventSourceStateTracking';
import itemStateChanged from '../../redux/actions/itemStateChanged';

const itemTypes = {
  Switch: SwitchListItem,
};

const defaultSelector = (itemName) => flow(
  get('listItems.items'),
  get(itemName),
);

const Item = ({
  itemName,
  reduxSelector,
}) => {
  const dispatch = useDispatch();

  useEventSourceStateTracking('items', itemName, (e) => dispatch(itemStateChanged(itemName, e.value)));

  const item = useSelector(reduxSelector(itemName), isEqual);
  const ItemTypeComponent = itemTypes[item.type];

  if (!item) {
    return null;
  }

  return (
    <ListItem>
      <ItemTypeComponent {...item} />
    </ListItem>
  );
};
Item.propTypes = {
  itemName: PropTypes.string.isRequired,
  reduxSelector: PropTypes.func,
};
Item.defaultProps = {
  reduxSelector: defaultSelector,
};
export default Item;
