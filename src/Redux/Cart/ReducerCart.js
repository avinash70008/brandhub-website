const initState = {

    cart: []
}

export const CartReducer = (store = initState, {type, payload}) => {
console.log("payload", payload)
    switch (type) {

        case "GETCARTDATA":
            return {
                ...store,
                cart: payload
            }


            case "REM":
                const cartREMOVE = store.cart.filter((ele) => ele._id != payload)
                console.log('DELETED', cartREMOVE)
                return { ...store, cart: cartREMOVE }


        case "DEC":
            const decreaseCartIndex = store.cart.findIndex((ele) => ele._id == payload,)
            if (store.cart[decreaseCartIndex].qty >= 1) {
                store.cart[decreaseCartIndex].qty -= 1
console.log("qty",store.cart[decreaseCartIndex].qty)
                return {
                    ...store,
                    cart: [...store.cart]

                }
            }

        case "INC":
            const increaseCartIndex = store.cart.findIndex((ele) => ele._id == payload,)
            if (store.cart[increaseCartIndex].qty >= 0) {
                store.cart[increaseCartIndex].qty += 1


                return {
                    ...store,
                    cart: [...store.cart]

                }
            }


        default:
            return store
    }
}
