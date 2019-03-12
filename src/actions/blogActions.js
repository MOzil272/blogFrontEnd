import Blog from '../API/Blog';
import {blogAction as actionTypes} from '../constants/actionTypes';

export function getBlog() {

  return function(dispatch) {
    let blog = new Blog().getBlog();

    blog.then(function(blog) {
      dispatch({

        type: actionTypes.GET_BLOG_ACTION,
        item: blog.data,

      });

    });

  };
}

const actions = {

  getBlog,
};

export default actions;
