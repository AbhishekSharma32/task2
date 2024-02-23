import { call, put, takeLatest } from "redux-saga/effects";
import { UserActionTypes, UserAction } from "../../action-types/userActionTypes";
import { loginApi, } from "../requests/userRequests";


import api from "../../../utils/api";
import { IUser } from "../../../types/userInterface";
import { toast } from 'react-toastify';

function* loginUserHandler(action: UserActionTypes) {

  try {
    const { data } = yield call(loginApi, action.payload);
    console.log("datata", data)

    // Set token
    yield localStorage.setItem("userAuth", "true");
    yield localStorage.setItem("accessToken", data?.token);
    yield (api.defaults.headers.common = {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    });

    // set user data
    const userData: IUser = {
      id: data?.id,
      firstName: data?.firstName,
      lastName: data?.lastName,
      gender: data?.gender,
      email: data?.email,
    };


    yield put({ type: UserAction.SET_USER_DATA, payload: userData });
    yield put({ type: UserAction.AUTH_STATUS, payload: true });
    toast.success('Login successful!');

  }
  catch (error: any) {
    toast.error('Login failed. Please try again.');
  }

}

export default function* userSaga() {
  yield takeLatest(UserAction.USER_LOGIN, loginUserHandler);
}
