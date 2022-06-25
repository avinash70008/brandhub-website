
import axios from "axios";


export const LOGIN_LOADING = "LOGIN_LOADING";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const TOKEN = "TOKEN";



export const login_loading=()=>({type:LOGIN_LOADING})
export const login_error=()=>({type:LOGIN_ERROR})
export const login_succes=(payload)=>({type:LOGIN_SUCCESS,payload});

//Login

export const Login_Request=(data,navigate)=>(dispatch)=>{
     dispatch(login_loading())

    axios.post(`https://pcmobileee.herokuapp.com/login`,data).then((res)=>
         {
            console.log(res.data);
            alert("Login Successfully");
            //  dispatch(login_succes(res.data))
            dispatch(login_succes(res.data.token.split(".")[0]))
            navigate("/")
         }).catch((e)=>
         {
          alert("Invalid User")
           console.log("err"+e)
           dispatch(login_error())
         })
}


export const TokenLogin=(data)=>(dispatch)=>{
  
 dispatch({type:TOKEN, payload: data})
}