import { combineReducers } from 'redux';

// import entities from './entities_reducer';
// import ui from './ui_reducer';
import session from './session_reducer';
import errors from './errors_reducer';
import entities from './entities_reducer';

const rootReducer = combineReducers({
  session,
  errors,
  entities
});

export default rootReducer;
