
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";


import { TshirtReducer } from "./Tshirt/reducer";
import { ShirtReducer } from "./Shirt/reducer";
import { PantReducer } from "./Pant/reducer";
import { BlazerReducer } from "./Blazer/reducer";

const rootReducer = combineReducers({

   
    tshirt : TshirtReducer ,
    shirt : ShirtReducer ,
    pant : PantReducer ,
    blazer : BlazerReducer,
    
    
})

export const store = createStore(rootReducer,applyMiddleware(thunk))