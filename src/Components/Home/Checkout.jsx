import {Button, TextField, Typography, Alert} from "@mui/material";
import {Box} from "@mui/system";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {GetCartDAta} from "../../Redux/Cart/ActionCart";
import {Checkoutdummy} from "./Checkoutdummy";
import {Myaddress} from "./Myaddress";

export function Checkout() {
    const data2 = useSelector((store) => store.SignIn.data)
    console.log("login check", data2)
    const dispatch = useDispatch()


    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [mobile, setMobile] = useState("");
    const [pincode, setPincode] = useState("");

    let total = 0;
    // useEffect(() => {
    //    let cart = JSON.parse(localStorage.getItem("cartData"));
    // /
    // setData([...data, ...cart]);
    // }, []);

    useEffect(() => {

        axios.get("https://avinashbrandhub.herokuapp.com/cart").then((res) => {
            setData(res.data);
        })
        console.log(data)
    }, [])

    // const HandleChange = (e) =>{
    // const input = e.target.value

    // }
    // console.log(HandleChange)
    const handleSubmit = () => {}

    return (
        <>
        <div style={{
          "margin":"auto",
          "justifyItem":"centre",
        }}>
            <div style={{
              "display":"grid",
              "gridTemplateColumns":"repeat(2, 1fr)",
              "gridGap": "10px",
              "margin":"auto",
              "width":"90%",
              "paddingTop":"10px"
            }}>
            <div>
                <Checkoutdummy/>
               
                </div>
                <div>
                    <Box sx={
                        {width: "100%"}
                    }>
                        <Typography sx={
                            {
                                textAlign: "center",
                                display: "flex"
                            }
                        }>
                            Current Order Status (Shipping Free)
                        </Typography>
                        <Box sx={
                            {
                                overflow: "scroll",
                                width: "100%",
                                height: "65%"
                            }
                        }>
                            {
                            data.map((el, index) => {
                                {
                                    total += Number(el.price * el.qty);
                                }
                                return (
                                    <div key={index}
                                        className="flexdiv">
                                        <div className="imgdiv">
                                            {" "}
                                            <img id="cartimage"
                                                src={
                                                    el.imgUrl
                                                }
                                                alt=""/>
                                        </div>

                                        <div className="Details">
                                            <p>Price: {
                                                el.price * el.qty
                                            }</p>
                                            <p>Size: {
                                                el.size
                                            }</p>

                                            <p>Colour: {
                                                el.colour
                                            }</p>
                                        </div>
                                    </div>
                                );
                            })
                        }
                            <h1>Total payable : {total}</h1>


                        </Box>


                    </Box>
                </div>


            </div>
            <Myaddress/>
            </div>

        </>


    );
};
