import { authConstants } from "../actions/constants"

const loginReq = authConstants.LOGIN_REQUEST;

const iniState = {
name:"anavadh"
};

const Temp = (state = iniState,action) => {

    console.log(action)
  
    switch (action.type){
        case loginReq:
            state = {
            ...state,
            ...action.payload
            }
            break;
           default:   // do nothing  used inorder to prevent errors
           return state;
        } 
    }

export default Temp