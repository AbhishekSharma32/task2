export interface UserActionTypes {
    type: UserAction|any;
    payload?: any;
}

export enum UserAction {
    USER_LOGIN = "USER_LOGIN",
    SET_USER_DATA = "SET_USER_DATA",
    AUTH_STATUS = "AUTH_STATUS",
    RESET_ALL_DATA = "RESET_ALL_DATA",

}
