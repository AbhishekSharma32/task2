
import { UserLogin } from "../../../types/userInterface";
import api from "../../../utils/api";

export const loginApi = async (data: UserLogin) => {
    return await api.post(`auth/login`, data);
};
