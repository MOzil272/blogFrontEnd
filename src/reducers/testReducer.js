import storage from 'redux-persist/lib/storage/session';
import {test as actionTypes} from '../constants/actionTypes';
import {persistReducer} from 'redux-persist';

const testReducerPersistConfig = {

  key: 'test',
  storage,

};

const testReducer = (state = {}, action) => {

  switch (action.type) {

    case actionTypes.TEST_ACTION:
      return {};
    default:
      return state;
  }

};

export default persistReducer(testReducerPersistConfig, testReducer);
