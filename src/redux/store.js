import {createStore, combineReducers} from 'redux';
import notesReducer from './notesApp';
import appReducer from './App';

// with single reducer
// const store = createStore(notesReducer);
// export default store;

const rootReducer = combineReducers({
  notes: notesReducer,
  app: appReducer,
});

const store = createStore(rootReducer);
export default store;
