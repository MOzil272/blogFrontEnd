import {test as actionTypes} from '../constants/actionTypes';

export function firstAction() {

  return function(dispatch) {

    dispatch({
      type: actionTypes.TEST_ACTION,
      data: 'Test',

    });

  };
}
const actions = {
  firstAction,

};
export default actions;
