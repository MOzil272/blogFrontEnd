import storage from 'redux-persist/lib/storage/session';
import {blogAction as actionTypes} from '../constants/actionTypes';
import {persistReducer} from 'redux-persist';

const blogReducerPersisConfig = {

  key: 'blog',
  storage,

};

const blogReducer = (state = {}, action) => {

  switch (action.type) {

    case actionTypes.GET_BLOG_ACTION:

      return {

        item: action.item,
      };
    default:
      return state;
  }

};

export default persistReducer(blogReducerPersisConfig, blogReducer);
