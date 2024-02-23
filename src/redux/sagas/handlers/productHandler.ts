import { call, put, takeLatest } from "redux-saga/effects";
import { ProductAction } from '../../action-types/productActionTypes';
import { getAllProductApi } from "../requests/productRequest";

function* getAllProductsHandler() {

  try {
    const { data } = yield call(getAllProductApi);
    yield put({ type: ProductAction.SET_ALL_PRODUCTS, payload: data.products });
  }
  catch (error: any) {
    console.log("errror", error)
  }

}

export default function* productSaga() {
  yield takeLatest(ProductAction.GET_ALL_PRODUCTS, getAllProductsHandler);

}
