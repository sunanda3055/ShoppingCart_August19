import { ACTIONS } from '../actions/actions';

const userInitialState = {
    productList : [],
    id: null,
}

export const reducer = (state = userInitialState, action) => {
    switch(action.type) {

        case ACTIONS.ADD_PRODUCT :
            return { ...state, productList: action.data };
            
        case ACTIONS.UPDATE_PRODUCT_QUANTITY :
            return { ...state, productList: action.data };

        case ACTIONS.REMOVE_PRODUCT :
            return { ...state, productList: action.data };

        case ACTIONS.GENERATE_ID :
            return { ...state, id: action.payload };

        default:
            return state;
    }
}