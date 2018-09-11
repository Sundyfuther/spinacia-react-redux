import { T } from '../constants';

const initState = {
  isFetching: false
}

export const mainReduce = (state = initState, action) => {
  switch (action.type) {
    case T.INIT_LOADING:
      return {...state, isFetching: action.isFetching};
    default:
      return state;
  }
};


