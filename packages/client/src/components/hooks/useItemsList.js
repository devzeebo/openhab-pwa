import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import get from 'lodash/fp/get';
import isEqual from 'lodash/isEqual';

import loadItemsList from '../../redux/actions/loadItemsList';

const defaultSelector = get('listItems.items.all');

const useItemsList = (reduxSelector = defaultSelector) => {
  const dispatch = useDispatch();
  const itemNames = useSelector(reduxSelector, isEqual);

  useEffect(() => {
    dispatch(loadItemsList());
  }, [dispatch]);

  return itemNames;
};
export default useItemsList;
