import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import blog from './blogReducer';
import test from './testReducer';

const persistConfig = {

  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  blog,
  test,

});
export default persistReducer(persistConfig, rootReducer);


