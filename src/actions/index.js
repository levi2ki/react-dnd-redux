import {
  INIT_LIST,
  INIT_LIST_ORDER,
  REORDER_CARD
} from '../constants/actionTypes'


export const initList = () => (dispatch, getState) => {
  dispatch({type: INIT_LIST});
  dispatch({
    type: INIT_LIST_ORDER,
     payload: Object.keys(getState().cards)
    });
}

export const reorderCard = (substituteId, replacedId) => ({
  type: REORDER_CARD,
  substituteId,
  replacedId
})