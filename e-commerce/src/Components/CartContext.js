import { createContext ,useReducer } from "react";
import { CartReducer } from "./CartReducer";

export const CartContext = createContext()

 const CartContextProvider = (props) => {
    
    const [cart, dispatch] =useReducer(CartReducer, {shopingCart: [], qty: 0, totalCost: 0} )


    return (
        <CartContext.Provider value={{...cart, dispatch}}>  
            {props.children}
        </CartContext.Provider>
    )
}
export default CartContextProvider