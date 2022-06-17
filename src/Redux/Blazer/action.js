import axios from "axios";

export const GETBLAZERDATA = "GETBLAZERDATA";

export const BlazerData = (payload) => ({

    type : GETBLAZERDATA,
    payload : payload
})

export const getBlazerData = () => (dispatch) => {

    axios.get("https://avinashbrand.herokuapp.com/blazer").then((res) => {
        dispatch(BlazerData(res.data))
    })
}