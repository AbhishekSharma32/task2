import axios from "axios";
import store from "../redux/store";
import { resetAllData } from "../redux/actions/userActions";


let token;
if (typeof window !== 'undefined') {
    token = window.localStorage.getItem("accessToken")
}

const api = axios.create({
    baseURL: "https://dummyjson.com/",
    headers: {
        common:{ 'Authorization': `Bearer ${ token ?? ""}` },
        'Content-Type': 'application/json',
        withcredentials: true,
        Accept: "application/json"
    },
})

// for refresh token
let isRefreshing = false;
let failedQueue : any  = [];
// run failed request after update token
const processQueue = (error : any, token = null) => {
    failedQueue.forEach((prom : any) => {
        if (error) {
            prom.reject(error);
        } else {
            prom.resolve(token);
        }
    });
    failedQueue = [];
};

// interceptor for refresh token
api.interceptors.response.use(
    (response) => {
        return response;
    },
    async (err) => {
        const originalRequest = err.config;
        if (err.response.status === 401 && !originalRequest._retry) {
            if (isRefreshing) {
                return new Promise(function (resolve, reject) {
                    failedQueue.push({ resolve, reject });
                })
                    .then(token => {
                        originalRequest.headers['Authorization'] = 'Bearer ' + token;
                        return axios(originalRequest);
                    })
                    .catch(err => {
                        return Promise.reject(err);
                    });
            }
            originalRequest._retry = true;
            isRefreshing = true;
            return new Promise(function (resolve, reject) {
                axios.post(`user/token/refresh`,      
                    {},
                    {
                        headers: {
                            "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
                        }
                    })
                    .then(res => {
                        localStorage.setItem('accessToken', res.data?.accessToken);
                        api.defaults.headers.common['Authorization'] = 'Bearer ' + res?.data?.accessToken;
                        originalRequest.headers['Authorization'] = 'Bearer ' + res.data?.accessToken;
                        processQueue(null, res?.data?.accessToken);
                        resolve(axios(originalRequest));
                        isRefreshing = false;
                    })
                    .catch(err => {
                        window.localStorage.clear();
                        store.reduxStore.dispatch(resetAllData());
                    })
            });
        }
        return Promise.reject(err);
    });



export default api;