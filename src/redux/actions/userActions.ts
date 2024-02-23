
import { UserLogin } from "../../types/userInterface";
import { UserActionTypes, UserAction } from "../action-types/userActionTypes";

export const userLogin = (payload: UserLogin): UserActionTypes | any => ({
    type: UserAction.USER_LOGIN,
    payload
})


export const resetAllData = () => {
    return {
        type: UserAction.RESET_ALL_DATA
    };
};