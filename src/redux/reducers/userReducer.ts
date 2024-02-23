
import { IUserInitialState } from "../../types/userInterface";
import { UserActionTypes, UserAction } from "../action-types/userActionTypes";

const initialState: IUserInitialState = {
    authStatus: false,
    user: {
        id: 0,
        firstName: "",
        lastName: "",
        gender: "",
        email: "",
    },


};

export default function userReducer(state = initialState, action: UserActionTypes): IUserInitialState {
    switch (action.type) {

        case UserAction.AUTH_STATUS:
            return {
                ...state,
                authStatus: true,
            };

        case UserAction.SET_USER_DATA:
            return {
                ...state,
                user: action.payload,
            };

        default:
            return state;
    }
}
