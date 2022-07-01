import axios from "axios";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {deccreaseQty, delteQty, GetCartDAta, increaseQty} from "../../Redux/Cart/ActionCart";



export const Cart = () => {
    

    const isAuth = useSelector((store) => store.SignIn.isAuth)
    const data = useSelector((store) => store.cart.cart)
    let total = 0
  
    const dispatch = useDispatch()
    const navigate = useNavigate();


  

    const incrementQuantity = (ele) => {
        dispatch(increaseQty(ele._id))

        axios.patch(`https://avinashbrandhub.herokuapp.com/cart/${ele._id}`, ele).then((data)=>{
            console.log("increaements updated cart line 29", data.data)

          
          
           
           })
        
    }
    const decrementQuantity = (ele) => {
        dispatch(deccreaseQty(ele._id))

        axios.patch(`https://avinashbrandhub.herokuapp.com/cart/${ele._id}`, ele).then((data)=>{
            console.log("increaements updated cart line 29", data.data)

          
          
           
           })

       
    }
    
    
    const deleteItem = (ele) => {
  

        axios.delete(`https://avinashbrandhub.herokuapp.com/cart/${ele._id}`, ele).then((data)=>{
            dispatch(GetCartDAta(data.data))


           })
             
            
        
    }
     useEffect(() => {

         dispatch(GetCartDAta())
     },[])

const getData = async()=>{
    const response = await fetch("https://avinashbrandhub.herokuapp.com/cart")
}

    


    return (<>
        <h1 id="mycart">MY CART</h1>
        <div> {
            data.map((el, index) => {
                {
                    total += Number(el.price * el.qty)
                }
                return <div key={index}
                    className="flexdiv">
                    <div className="imgdiv"> {" "}
                        <img src={
                                el.imgUrl
                            }
                            alt=""/>
                    </div>
                    <div className="counter">
                        <button onClick={
                            () => {
                                incrementQuantity(el);
                            }
                        }>
                            +
                        </button>
                        <p> {
                            el.qty
                        }</p>
                        <button onClick={
                            () => {  decrementQuantity(el)
                            }
                        }>-</button>
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
                        <button onClick={

                            ()=>deleteItem(el)
                            
                        }>
                            Remove
                        </button>
                    </div>
                </div>
        })
        } </div>
        <div>
            <p>Total : {total} </p>

            {

           total>0 && isAuth == true ? <button onClick={
                    () => navigate("/checkout")
                }

                id="payBtn">
                Proceed to Checkout
            </button> : <button onClick={
                    () => navigate("/signup")
                }
                id="payBtn">
                Proceed to Checkout
            </button>
        } </div>
    </>);
};
