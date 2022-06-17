import {
  Button,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  let total = 0;
  useEffect(() => {
    let cart = JSON.parse(localStorage.getItem("cartData"));
    setData([...data, ...cart]);
  }, []);
  return (
    <>
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
              noValidate
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
                required
              />
              <TextField
                variant="standard"
                label="Last Name"
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
                required
              />
              <TextField
                variant="standard"
                label="State"
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
                required
              />
              <TextField
                variant="standard"
                label="Mobile No."
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
                 

                 
                  navigate("/payment");
                
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
                  total += Number(el.price * el.quantity);
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
                      <p>Price: {el.price * el.quantity}</p>
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
    </>
  );
}




