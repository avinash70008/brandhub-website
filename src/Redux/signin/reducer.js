import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS } from "./action"


const initialState={
    loading:false,
    error:false,
    data:{}
}
export const loginReducer=(state=initialState,{type,payload})=>{
     switch(type){
         case LOGIN_LOADING: return {...state, loading:false}
         case LOGIN_ERROR: return {...state , loading:false, error:true}
         case LOGIN_SUCCESS :return {...state, loading:false,error:false,data:payload}
         default : return state
         
     }
}