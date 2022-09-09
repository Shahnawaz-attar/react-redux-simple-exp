
import {ADD_TO_CART , REMOVE_FROM_CART} from '../Constants';


const initialState = {
    cartItems: [
       
       
    ],
}
const cartItems = (state = initialState, action) => {
    console.log(action);
    switch(action.type){
        case ADD_TO_CART :
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            }
        case REMOVE_FROM_CART:
            // remove last item from cart
            return {
                ...state,
                cartItems: state.cartItems.slice(0, state.cartItems.length - 1)
            }
        
        
        default :
        return state    
    }

}





export default cartItems;