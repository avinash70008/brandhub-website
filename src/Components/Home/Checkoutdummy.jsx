import {Button, TextField, Typography, Alert} from "@mui/material";
import {Box} from "@mui/system";
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import { useNavigate } from "react-router";
import {shippingAdd} from "../../Redux/checkout/action";


export const Checkoutdummy = () => {
const navigate = useNavigate()
    const dispatch = useDispatch()


    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");

    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [phone, setPhone] = useState("");
    const [pincode, setPincode] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = () => {

        const payload = {
            firstname,
            lastname,
            city,
            email,
            state,
            phone,
            pincode
        }
        dispatch(shippingAdd(payload))
        console.log("payload", payload)
       
        if (firstname !== "" && lastname !== "" && city !== "" && state !== "" && phone !== "" && pincode !== "" && email !== "") {
         
           
        } else {
            alert("Please fill all Details")
        }


        setFirstname("")
        setLastname("")
        setCity("")
        setPhone("")
        setPincode("")
        setEmail("")


    }
    return (
        <div>
            <>
            <p style={{"textAlign": "center"}}>Please fill Shipping Address to continue</p>
                <div>

                    <Box sx={
                        {
                            width: "80%",
                            height: "600px",
                            margin: "auto",
                            marginTop: "50px",
                            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                            padding: "10px",
                            alignItems: "center"
                        }
                    }>

                        <Box sx={
                            {
                                width: "100%",
                                display: "flex",
                                justifyContent: "space-between",
                                gap: "10px",
                                margin: "10px"
                            }
                        }>
                            <Box sx={
                                {width: "50%"}
                            }>
                                <Box component="form"

                                    sx={
                                        {
                                            margin: "auto",
                                            marginTop: "20px",
                                            width: "100%",
                                            display: "flex",
                                            justifyContent: "space-between",
                                            flexWrap: "wrap"
                                        }
                                }>

                                    <TextField type='text' variant="standard" label="First Name"
                                        value={firstname}
                                        onChange={
                                            (e) => {
                                                setFirstname(e.target.value)
                                            }
                                        }

                                        required/>

                                        <TextField type='text' variant="standard" label="Last Name"
                                        value={lastname}
                                        onChange={
                                            (e) => {
                                                setLastname(e.target.value)
                                            }
                                        }
                                        required/>
                                </Box>


                            <TextField type="text" variant="standard" label="Email"
                                value={email}
                                onChange={
                                    (e) => {
                                        setEmail(e.target.value)
                                    }
                                }

                                required/>


                            <Box sx={
                                {
                                    margin: "auto",
                                    marginTop: "20px",
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    flexWrap: "wrap"
                                }
                            }>
                                <TextField variant="standard" label="City"
                                    value={city}
                                    onChange={
                                        (e) => {
                                            setCity(e.target.value)
                                        }
                                    }
                                    required/>
                                <TextField type='text' variant="standard" label="State"
                                    value={state}
                                    onChange={
                                        (e) => {
                                            setState(e.target.value)
                                        }
                                    }
                                    required/>
                            </Box>
                        <Box sx={
                            {
                                margin: "auto",
                                marginTop: "20px",
                                width: "100%",
                                display: "flex",
                                justifyContent: "space-between",
                                flexWrap: "wrap"
                            }
                        }>
                            <TextField type="Number" variant="standard" label="Pincode"
                                value={pincode}
                                onChange={
                                    (e) => {
                                        setPincode(e.target.value)
                                    }
                                }
                                required/>
                            <TextField type="Number" variant="standard" label="Mobile No."
                                value={phone}
                                onChange={
                                    (e) => {
                                        setPhone(e.target.value)
                                    }
                                }
                                required/>
                        </Box>
                    <Box sx={
                        {
                            margin: "auto",
                            marginTop: "30px",
                            display: "flex",
                            justifyContent: "center"
                        }
                    }>
                        <Button onClick={handleSubmit}
                            style={
                                {

                                    "padding": "10px",
                                    "color": "white",
                                    "backgroundColor": "black",
                                    "borderRadius": "20px"


                                }

                        }>Save Details</Button>


                    </Box>
                </Box>


            </Box>
        </Box>

    </div>
</></div>
    )
}
