import axios from "axios";

export const GETSHIRTDATA = "GETSHIRTDATA";

export const ShirtData = (payload) => ({

    type : GETSHIRTDATA,
    payload : payload
})

export const getShirtData = () => (dispatch) => {

    axios.get("https://avinashbrand.herokuapp.com/shirt").then((res) => {
        dispatch(ShirtData(res.data))
    })
}