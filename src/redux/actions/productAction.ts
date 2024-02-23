
import { ProductAction, ProductActionTypes } from "../action-types/productActionTypes";

export const getProductList = (): ProductActionTypes | any => ({
    type: ProductAction.GET_ALL_PRODUCTS,
})

