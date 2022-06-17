import axios from "axios";

export const REGISTER_LOADING = "LOGIN_LOADING";
export const REGISTER_ERROR = "LOGIN_ERROR";
export const REGISTER_SUCCESS = "LOGIN_SUCCESS";



export const register_loading=()=>({type:REGISTER_LOADING})
export const register_error=()=>({type:REGISTER_ERROR})
export const register_succes=()=>({type:REGISTER_SUCCESS});




export const Register_Request=(data,navigate)=>(dispatch)=>{
    dispatch(register_loading())

   axios.post(`https://pcmobileee.herokuapp.com/register`,data).then((res)=>
        {
         //  console.log(res.data);
           alert("Ragister Successfully");
           dispatch(register_succes(res.data))
           navigate("/Signin")
        }).catch((e)=>
        {
         alert("Invalid User")
          console.log("err"+e)
          dispatch(register_error())
        })
}