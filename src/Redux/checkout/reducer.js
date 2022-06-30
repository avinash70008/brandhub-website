import { LOADING_SHIPPING_ADDRESS,SHIPPING_ADDRESS } from "./action";

const initState={

    loading:false,
    firstname:"",
    lastname:"",
    phone:"",
    email:"",
    city: "",
     state:"",
     pincode:""
}

export const shippingReducer = (store= initState,{type, payload})=>{
    switch(type){
        case LOADING_SHIPPING_ADDRESS:
            return{
                ...store,
                loading:true
            }
       
            case SHIPPING_ADDRESS:
                return{
                    ...store,
                    loading:false,
                   firstname:payload.firstname,
                   lastname:payload.lastname,
                   phone:payload.phone,
                   email:payload.email,
                   city:payload.city,
                   state:payload.state,
                   pincode:payload.pincode,
   }
  
       default:
           return store
    }
}