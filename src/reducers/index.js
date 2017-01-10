import {combineReducers} from 'redux';
import reducer_resources from './resourceReducer';
import modal from './modalReducer';

const rootReducer = combineReducers({
  reducer_resources,
  modal
});

export default rootReducer;