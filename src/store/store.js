 import {configureStore} from '@reduxjs/toolkit'

import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/reducer' 

const store = configureStore(rootReducer,applyMiddleware(thunk));


export default store;





