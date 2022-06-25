
import  React , {useState} from "react"
import {Link}  from "react-router-dom"
 import axios  from "axios"
import "./Login.css"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Login_Request } from "../../Redux/signin/action"




export const Signin  = ()=>{
    const dispatch=useDispatch()
     const data = useSelector((store)=>store.SignIn.data)
     console.log("login",data)
     
         const  navigate =useNavigate()
    const [user,setUser] = useState({
       
        email:"",
        password:""
    })

    const handleChange =e=>{
        const{name,value} =e.target
        

      
       
        setUser({
            ...user,
            [name]:value,
           
           
           
           
        })
    }



    const login  =() =>{
        dispatch(Login_Request(user,navigate))
        console.log(user, "user")
    }


 



    return(
        <div> 
            <br />
            <br />
            <br />
            <br />
        <div className="l1">
        <h3>Login Account</h3>
        <input className="mail" type="text" name="email" value={user.email} placeholder="Enter Your E-mail id" onChange={handleChange} />
        <br />
        <br />
        <input className="mail" type="password" name="password" value={user.password} placeholder="Enter Your Password" onChange={handleChange} />
        <br />
        <br />
        <button className="l2" 
        onClick=
        {login}
        >Log in</button>
        <br />
        <br />
        <div>Or log in with</div>
        <br />
        <div className="l3">
            <button className="Gbtn1">
             <img className="img1" src="https://i.ibb.co/PFnVMG7/Screenshot-2022-03-30-220226.png" alt="" />
            
            </button>
            <button className="Gbtn2">
                <img className="img2" src="https://i.ibb.co/1fNJnVd/Screenshot-2022-03-30-215245.png" alt="" />
            </button>
        </div>
        <br />
        <br />
        {/* <Link to ="signup">Sign up</Link> */}
        <label className="label" htmlFor="">Don't have an account?</label>
        <Link className="link" to="/signup">Register</Link>
        </div></div>
    )
}