import { REGISTER_LOADING, REGISTER_ERROR, REGISTER_SUCCESS } from "./action"


const initialState={
    loading:false,
    error:false,
  
}
export const registerReducer=(state=initialState,{type})=>{
     switch(type){
         case REGISTER_LOADING : return {...state, loading:true}
         case REGISTER_ERROR: return {...state , loading:false, error:true}
         case REGISTER_SUCCESS :return {...state, loading:false,error:false}
         default : return state
         
     }
}