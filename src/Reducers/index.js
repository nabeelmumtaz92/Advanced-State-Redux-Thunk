// src/reducers/index.js
import { combineReducers } from 'redux';
import nationalityReducer from './nationalityReducer';

const rootReducer = combineReducers({
  nationality: nationalityReducer,
});

export default rootReducer;
