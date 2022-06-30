import { Login } from "@mui/icons-material"
import {Routes , Route} from "react-router"
import { Cart } from "../Components/Home/Cart"
import { Checkoutdummy } from "../Components/Home/Checkoutdummy"
import { Home } from "../Components/Home/Home"
import { Payment } from "../Components/Home/Payment"
import { PaymentSuccessful } from "../Components/Home/PaymentSuccessful"
import { Signin } from "../Components/LoginSIgnup/Login"
import { Signup } from "../Components/LoginSIgnup/Register"
import { BlazerDetails } from "../Components/ProductDetails/blazer"
import { PantDetails } from "../Components/ProductDetails/Pant"
import { ShirtDetails } from "../Components/ProductDetails/Shirt"
import { TshirtDetails } from "../Components/ProductDetails/Tshirt"
import { Blazer } from "../Components/Products/Blazer"
import { Pant } from "../Components/Products/pant"
import { Shirt } from "../Components/Products/Shirt" 
import { Tshirt } from "../Components/Products/Tshirt"
import { Checkout } from "../Components/Home/Checkout"





export const AllRoutes =() => {

    return(
        <Routes>

            <Route path ="/" element ={<Home />}/>
           <Route path ="/tshirt" element ={<Tshirt />}/>
            <Route path ="/shirt" element ={<Shirt />}/>
            <Route path ="/pant" element ={<Pant />}/>
            <Route path ="/blazer" element ={<Blazer />}/>
           

            
            <Route path ="/tshirtdetails/:_id" element ={<TshirtDetails/>}/>
            <Route path ="/shirtdetails/:_id" element ={<ShirtDetails/>}/>
            <Route path ="/pantdetails/:_id" element ={<PantDetails />}/>
            <Route path ="/blazerdetails/:_id" element ={<BlazerDetails/>}/>
            <Route path ="/getaddress/:_id" element ={<Payment/>}/>
     

            <Route path ="/cart" element ={<Cart/>}/>
            <Route path ="/payment" element ={<Payment />}/>
            <Route path ="/paymentsuccessful" element ={<PaymentSuccessful />}/>
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/signup" element={<Signup/>}/>
      
            <Route path='/checkout' element={<Checkout/>}/>
           
           
        </Routes>
    )
}