import {
  Button,
  TextField,
  Typography,Alert
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { GetCartDAta } from "../../Redux/Cart/ActionCart";

export default function Checkout() {
  const data2 = useSelector((store)=>store.SignIn.data)
  console.log("login check",data2)
  const dispatch = useDispatch()

 
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [firstName , setFirstName] = useState("");
  const [lastName , setLastName] = useState("");
  const [address , setAddress] = useState("");
  const [ city, setCity] = useState("");
  const [state , setState] = useState("");
  const [mobile , setMobile] = useState("");
  const [pincode , setPincode] = useState("");
 
  let total = 0;
  // useEffect(() => {
  //    let cart = JSON.parse(localStorage.getItem("cartData"));
  //   / 
  //   setData([...data, ...cart]);
  // }, []);

   useEffect(()=>{
        
   axios.get("https://avinashbrandhub.herokuapp.com/cart").then((res)=>{
         setData(res.data);
        })
       console.log(data)
 }, [])

//  const HandleChange = (e) =>{
//  const input = e.target.value

//  }
// console.log(HandleChange)
const handleSubmit = () =>{
  
}

  return (
    <>
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          width: "80%",
          height: "600px",
          margin: "auto",
          marginTop: "50px",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          padding: "10px",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "monospace",
            fontWeight: "bold",
            fontSize: "19px",
            borderBottom: "1px solid gray",
          }}
        >
          Fill the Shipping Details given bellow
        </Typography>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
            margin: "10px",
          }}
        >
          <Box sx={{ width: "50%" }}>
            <Box
              component="form"
              
              sx={{ 
                margin: "auto",
                marginTop: "20px",
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              <TextField
                variant="standard"
                label="First Name"
               value = {firstName}
               onChange={(e)=>{setFirstName(e.target.value)}}
               
                required
                
              />
              <TextField
                variant="standard"
                label="Last Name"
                value = {lastName}
                onChange={(e)=>{setLastName(e.target.value)}}
                required
              />
            </Box>
            <Box
              sx={{
                margin: "auto",
                marginTop: "20px",
                width: "100%",
                display: "flex",
                justifyContent: "space-evenly",
                flexWrap: "wrap",
              }}
            >
              <TextField
                variant="standard"
                label=" Current Address"
                value = {address}
                onChange={(e)=>{setAddress(e.target.value)}}
                fullWidth
                required
              />
            </Box>
            <Box
              sx={{
                margin: "auto",
                marginTop: "20px",
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              <TextField
                variant="standard"
                label="City"
                value = {city}
                onChange={(e)=>{setCity(e.target.value)}}
                required
              />
              <TextField
                variant="standard"
                label="State"
                value = {state}
                onChange={(e)=>{setState(e.target.value)}}
                required
              />
            </Box>
            <Box
              sx={{
                margin: "auto",
                marginTop: "20px",
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              <TextField
                variant="standard"
                label="Pincode"
                value = {pincode}
                onChange={(e)=>{setPincode(e.target.value)}}
                required
              />
              <TextField
                variant="standard"
                label="Mobile No."
                value = {mobile}
                onChange={(e)=>{setMobile(e.target.value)}}
                required
              />
            </Box>
            <Box
              sx={{
                margin: "auto",
                marginTop: "30px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                variant="contained"
                onClick={() => {
                 
                if(firstName!=="" && lastName!=="" && pincode!=="" && mobile!=="" && city!=="" && address!=="")
                  navigate("/payment");
                 else{
                 alert("Please filled all Details")
                 }
              
                }}
              >
                Proceed To Payment
              </Button>
            </Box>
          </Box>
         

          <Box sx={{ width: "50%" }}>
            <Typography sx={{ textAlign: "center" }}>
              Current Order Status (Shipping Free)
            </Typography>
            <Box
              sx={{
                overflow: "scroll",
                width: "100%",
                height: "65%",
              }}
            >
              {data.map((el, index) => {
                {
                  total += Number(el.price * el.qty);
                }
                return (
                  <div key={index} className="flexdiv">
                    <div className="imgdiv">
                      {" "}
                      <img
                        id="cartimage"
                        src={el.imgUrl}
                        alt=""
                      />
                    </div>

                    <div className="Details">
                      <p>Price: {el.price * el.qty}</p>
                      <p>Size: {el.size}</p>
                    
                      <p>Colour: {el.colour}</p>
                    </div>
                  </div>
                );
              })}
            </Box>
            <h1>Total payable : {total}</h1>
          </Box>
        </Box>
      </Box>
      </form>
    </>
  );
            };
