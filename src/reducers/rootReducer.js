import {v4} from 'uuid';
import { combineReducers } from "redux";

import {INIT_LIST, INIT_LIST_ORDER} from '../constants/actionTypes';

const initialState = [
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


const cards = (state=initialState, action) => {
  switch (action.type) {
    case INIT_LIST:
    default:
      return state;
  }
}

const drawOrder = (state = [], action) => {
  switch (action.type) {
    case INIT_LIST_ORDER:
      return action.payload;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  cards,
  drawOrder
});
export default rootReducer;