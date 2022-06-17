import { GETBLAZERDATA } from "./action";

const initState = {

    blazer : []
}

export const BlazerReducer = (store =initState , {type , payload} ) => {

    switch(type){

        case GETBLAZERDATA :
        return {...store , blazer : [...payload]}

        default :
        return store
    }
}