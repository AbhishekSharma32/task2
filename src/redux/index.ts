import { combineReducers } from 'redux';
import { Reducer } from 'redux';
import { AppState } from './types';

import userReducer from './reducers/userReducer';
import productReducer from './reducers/productReducer';


const appReducers: Reducer<AppState> | any = combineReducers({
   user: userReducer,
   product: productReducer,

});

// for reseting root reducer on logout
const rootReducer = (state: any, action: any) => {
   if (action.type === 'RESET_ALL_DATA') {
      return appReducers(undefined, action);
   }
   return appReducers(state, action)
}

export default rootReducer;