
import { GETPANTDATA } from "./action";

const initState = {

    pant : []
}

export const PantReducer = ( store =initState,{type ,payload}) => {

    switch(type){

        case GETPANTDATA :
        return { ...store , pant : [...payload] }

        default :
        return store
    }
}