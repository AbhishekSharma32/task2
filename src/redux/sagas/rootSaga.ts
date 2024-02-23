import { all, call } from 'redux-saga/effects';
import userSaga from './handlers/userHandlers';
import productSaga from './handlers/productHandler';

export default function* rootSaga() {
    yield all([
        call(userSaga),
        call(productSaga),

    ]);
}
