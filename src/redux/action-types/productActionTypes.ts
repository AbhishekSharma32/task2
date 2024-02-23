export interface ProductActionTypes {
    type: ProductAction | any;
    payload?: any;
}

export enum ProductAction {

    GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS",
    SET_ALL_PRODUCTS = "SET_ALL_PRODUCTS"
}
