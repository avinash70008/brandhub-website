export const LOADING_SHIPPING_ADDRESS= 'LOADING_SHIPPING_ADDRESS';
export const SHIPPING_ADDRESS= 'SHIPPING_ADDRESS';



export const loadingshippingAddress=()=>({
    type: LOADING_SHIPPING_ADDRESS,

});

export const shippingAddress=(payload)=>({
    type: SHIPPING_ADDRESS,
    payload,

});



export const shippingAdd= ({firstname, lastname, phone, email, city, state, pincode })=>(dispatch)=>{
    dispatch(loadingshippingAddress())
    fetch(`https://avinashbrandhub.herokuapp.com/address`,{
        method:"POST",
        body:JSON.stringify({firstname, lastname, phone, email,city, state, pincode }),
        headers:{
            "Content-Type":"application/json"
        }
       
    }) .then((res)=> res.json())
    .then((res)=> dispatch(shippingAddress({firstname, lastname, phone, email,city, state, pincode })))
    .catch((e)=> console.log("error",e))


}