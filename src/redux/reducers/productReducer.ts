
import { IProductInitialState } from "../../types/userInterface";
import { ProductAction, ProductActionTypes } from '../action-types/productActionTypes';

const initialState: IProductInitialState = {
    product: {
        id: 0,
        title: "",
        thumbnail: "",
        price: 0,
        images: [],
    },

};

export default function productReducer(state = initialState, action: ProductActionTypes): IProductInitialState {
    switch (action.type) {
        case ProductAction.SET_ALL_PRODUCTS:
            return {
                ...state,
                product: action.payload,
            };

        default:
            return state;
    }
}
