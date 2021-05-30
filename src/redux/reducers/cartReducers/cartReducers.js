
import {ADD_PRODUCT, REMOVE_PRODUCT} from '../../actions/cartActions/cartActions';

const initialState = {
        cart : []
}

export const cartReducers = (action , state = initialState) =>{
    switch(action.type){
        case  ADD_PRODUCT :
            const newId = action.id;
            const newCart = [...state.cart, newId]
                return { cart : newCart};

                case  REMOVE_PRODUCT :
            const id = action.id;
            const balanceCart = state.cart.filter(item => item.id !== id)
                return { cart : newCart}


        default :
        return  state
    }
        
}