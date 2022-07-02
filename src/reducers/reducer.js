import authReducer from './auth.reducers'
import { combineReducers } from 'redux'

const rootReducer =combineReducers({
    auth: authReducer
})

export default rootReducer









// const Value  = (state={name: 'Anaadh'}) =>{

//     return state;
 
// }


// export default Value; 