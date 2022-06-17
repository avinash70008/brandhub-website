import { GETSHIRTDATA } from "./action";

const initState = {

    shirt : []
}

export const ShirtReducer = (store =initState , {type , payload} ) => {

    switch(type){

        case GETSHIRTDATA :
        return {...store , shirt : [...payload]}

        default :
        return store
    }
}