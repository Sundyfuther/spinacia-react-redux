// import { T } from '../constants';
import {fetchingAction} from '../../App/action';
// import request from '../../../utils/request';

export const initMainPage = () => (dispatch, getState) => {
  const {requestStateGroup} = getState().AppReducer;
  const fetchingName = 'initMainRequest';

  if (requestStateGroup[fetchingName]) return;

  dispatch(fetchingAction({[fetchingName]: true}));

  setTimeout(() => {
    dispatch(fetchingAction({[fetchingName]: false}));
  }, 1500);
}

