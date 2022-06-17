import axios from "axios";


export const GETTSHIRTDATA = "GETTSHIRTDATA";

export const TshirtData = (payload) => ({

    type : GETTSHIRTDATA,
    payload : payload
})

export const getTshirtData = () => (dispatch) => {

    axios.get("https://avinashbrand.herokuapp.com/tshirt").then((res)=>{
        dispatch(TshirtData(res.data))
    })
}