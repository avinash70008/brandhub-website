import axios from "axios";


export const GETPANTDATA = "GETPANTDATA";

export const PantData = (payload) => ({

    type : GETPANTDATA,
    payload : payload
})

export const getPantData = () => (dispatch) => {

    axios.get("https://avinashbrand.herokuapp.com/pant").then((res)=>{
        dispatch(PantData(res.data))
    })
}