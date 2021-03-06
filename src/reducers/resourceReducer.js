import * as types from '../actions/actionTypes';
import initialState from './initialState';
import config from '../config/config';

export default function resourceReducer(state = initialState.resources, action) {
    const newState =JSON.parse(JSON.stringify(state));
    const found = config.resources.find((resource,index)=>
    {
      if (action.type === `${resource.name}_LIST_CLEAR`) {
        newState[index].list.visibleLoader = action.resource.visible;
        newState[index].list.total = 0,
        newState[index].list.page = 1,
        newState[index].list.items = [];
        return true;
      }      
      if (action.type === `${resource.name}_LIST_SUCCESS`) {
        newState[index].list.items = action.resource.rows;
        newState[index].list.total = action.resource.total;
        newState[index].list.page = action.resource.page;
        newState[index].list.visibleLoader = false;
        newState[index].list.appliedFilter = action.resource.appliedFilter;
        newState[index].list.appliedSort = action.resource.appliedSort;
        return true;
      }
      return false;
    }
  );
  if (found){
    return newState;
  }
  return state;
}
