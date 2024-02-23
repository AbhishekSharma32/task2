
import api from "../../../utils/api";

export const getAllProductApi = async () => {
    return await api.get(`products`);
};


