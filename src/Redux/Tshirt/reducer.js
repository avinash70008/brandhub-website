
import { GETTSHIRTDATA } from "./action";

const initState = {

    tshirt : []
}

export const TshirtReducer = ( store =initState,{type ,payload}) => {

    switch(type){

        case GETTSHIRTDATA :
        return { ...store , tshirt : [...payload] }

        default :
        return store
    }
}