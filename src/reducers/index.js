import {combineReducers} from 'redux';
import reducer_resources from './resourceReducer';
import view from './viewModalReducer';
import edit from './editModalReducer';

const rootReducer = combineReducers({
  reducer_resources,
  modal: combineReducers({
    view,
    edit
  })
});

export default rootReducer;