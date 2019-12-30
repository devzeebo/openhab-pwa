import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import invert from 'lodash/invert';
import Switch from '@material-ui/core/Switch';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import loadItem from '../../redux/actions/loadItem';
import setItemState from '../../functions/items/setItemState';

const stateMap = {
  ON: true,
  OFF: false,
};
const inverseStateMap = invert(stateMap);

const SwitchListItem = ({ name, label, state }) => {
  const dispatch = useDispatch();
  const value = stateMap[state];

  const eventListener = () => {
    setItemState(name, `${inverseStateMap[!value]}`)
      .then(() => dispatch(loadItem(name)));
  };

  return (
    <>
      <ListItemText primary={label} />
      <ListItemSecondaryAction>
        <Switch
          edge="end"
          onChange={eventListener}
          checked={value}
        />
      </ListItemSecondaryAction>
    </>
  );
};
SwitchListItem.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
};
export default SwitchListItem;
