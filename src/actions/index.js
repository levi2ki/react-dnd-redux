import {INIT_LIST, INIT_LIST_ORDER} from '../constants/actionTypes'


export const initList = () => (dispatch, getState) => {
  dispatch({type: INIT_LIST});
  dispatch({
    type: INIT_LIST_ORDER,
     payload: getState().cards.map(item => item.id)
    });
}