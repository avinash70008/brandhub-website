
import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from "redux-thunk";


import { TshirtReducer } from "./Tshirt/reducer";
import { ShirtReducer } from "./Shirt/reducer";
import { PantReducer } from "./Pant/reducer";
import { BlazerReducer } from "./Blazer/reducer";
import { loginReducer } from "./signin/reducer";
import { CartReducer } from "./Cart/ReducerCart";
import { shippingReducer } from "./checkout/reducer";


// const rootReducer = combineReducers({

const composeEnhancers =
  typeof window === 'object' &&
  window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ ?   
    window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const middleware= [thunk]
const enhancer = composeEnhancers(
    applyMiddleware(...middleware),
   
  );
  const rootReducer=combineReducers ({
   
    tshirt : TshirtReducer ,
        shirt : ShirtReducer ,
        pant : PantReducer ,
        blazer : BlazerReducer,
        SignIn: loginReducer,
        cart:CartReducer,
        shippingReducer

})
 export const store = createStore(rootReducer, enhancer);
    
   

