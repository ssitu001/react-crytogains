import { combineReducers } from 'redux';
import handleTransaction from './handleTransaction';
import getPrices from './getPrices';

const rootReducer = combineReducers({
  handleTransaction,
  getPrices
});

export default rootReducer;