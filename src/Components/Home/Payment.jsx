import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";



export const Payment = () => {

  const [cardholdername, setCardholdername] = useState("");
  const [cardnumber, setCardnumber] = useState("");
  const [validity, setValidity] = useState("");
  const [cvv, setCvv] = useState("");
  
  const dispatch = useDispatch();
const navigate= useNavigate()

  

  const { _id } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    fetch(`https://avinashbrandhub.herokuapp.com/getaddress/${_id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => setDetails(res))
      .catch((err) => console.log(err));
  }, []);

  
  function handlepayment (){
    if (
      cardholdername == "" ||
      cardnumber == "" ||
      validity == "" ||
      cvv == ""
    ) {
      alert("wrong card details");
     
    
      
    } else  if(cardnumber.length!=16){
    
      alert("card number is not valid");
     
    } else  if(cvv.length!=3){
    
      alert("cvv is not valid")
    }else  if(validity.length!=5){
    
      alert(" entervalid date")}
      else{
        alert("payment Sucessfull")
        navigate("/")
      }

    

    setCardholdername("");
    setCardnumber("");
    setValidity("");
    setCvv("");
    
  };

    


 

  return (
    <div>
      <div className="d-flex justify-content-center mb-2">
        <h4>payment</h4>
      </div>

      <div>
        <p>your product will be delivered to following Addres:</p>
        <div className="d-flex gap-2 m-0">
        
          <p>Name:{details.firstname}</p>
        
           <p>EMAIL:{details.email}</p>
          <p>MOBILE:{details.phone}</p>
     
          <p>CITY:{details.city}</p>
          <p>STATE:{details.state}</p>
          <p>PINCODE:{details.pincode}</p>
        </div>


    
   </div>

   <div
   className=" mt-3 shadow-sm p-3 mb-5 bg-body rounded m-auto"
   style={{ width: "30%" }}
 >
   <h6>Card Details:</h6>
   <div>
     <input
       type="text"
       className="form-control"
       placeholder="Card holder Name"
       value={cardholdername}
       onChange={(e) => setCardholdername(e.target.value)}
       required
     />

     <br />

     <input
       type="number"
       className="form-control"
       placeholder="Card Number"
       value={cardnumber}
       onChange={(e) => setCardnumber(e.target.value)}
       required
     />

     <div className="d-flex mt-4">
       <input
         type="text"
         placeholder="MM/YY"
         className="form-control"
         value={validity}
         onChange={(e) => setValidity(e.target.value)}
         required
       />
       <input
         type="password"
         placeholder="CVV"
         className="form-control"
         value={cvv}
         onChange={(e) => setCvv(e.target.value)}
         required
       />
     </div>
     <div className="d-flex mt-4 me-3">
       <button
         type="button"
         className="btn btn-success"
         onClick={()=>{
           handlepayment()
         
         
           
         }}
       >
         PAY 
       </button>
     </div>
   </div>
 </div>
</div>

  
  );
};