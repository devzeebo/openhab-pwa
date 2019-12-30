import React from 'react';

import List from '@material-ui/core/List';

import map from 'lodash/fp/map';

import DynamicListItem from './DynamicListItem';
import useItemsList from '../hooks/useItemsList';

const DynamicItemsList = () => {
  const items = useItemsList();

  return (
    <List>
      {map((itemName) => (
        <DynamicListItem
          key={itemName}
          itemName={itemName}
        />
      ))(items)}
    </List>
  );
};
export default DynamicItemsList;
