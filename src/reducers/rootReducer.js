import {v4} from 'uuid';
import { combineReducers } from "redux";

import {INIT_LIST, INIT_LIST_ORDER, REORDER_CARD} from '../constants/actionTypes';

const data = [
  {
    id: v4(),
    text: 'first'
  },
  {
    id: v4(),
    text: 'second'
  },
  {
    id: v4(),
    text: 'third'
  },
  {
    id: v4(),
    text: 'fourth'
  },
  {
    id: v4(),
    text: 'fifth'
  },
]


const cards = (state={}, action) => {
  switch (action.type) {
    case INIT_LIST:
      const nextState = {};
      data.forEach((_i) => {
        nextState[_i.id] = _i;
      })
      return {
        ...nextState
      }
    default:
      return state;
  }
}

const drawOrder = (state = [], action) => {
  switch (action.type) {
    case INIT_LIST_ORDER:
      return action.payload;
    case REORDER_CARD:
      var newArr = [...state];
      // TODO: remove hardCode
      newArr.splice(newArr.indexOf(action.substituteId), 1);
      if(state.indexOf(action.substituteId) > state.indexOf(action.replacedId)) {
        newArr.splice(newArr.indexOf(action.replacedId),0, action.substituteId)
      } else {
        newArr.splice(newArr.indexOf(action.replacedId)+1,0, action.substituteId)
      }
      

      // newArr[state.indexOf(action.substituteId)] = action.replacedId;
      // newArr[state.indexOf(action.replacedId)] = action.substituteId;

      return newArr;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cards,
  drawOrder
});
export default rootReducer;