import {combineReducers} from 'redux';
import reducer_resources from './resourceReducer';
import view from './viewModalReducer';

const rootReducer = combineReducers({
  reducer_resources,
  modal: combineReducers({
    view
  })
});

export default rootReducer;