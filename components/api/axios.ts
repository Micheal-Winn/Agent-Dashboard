import axios from 'axios';
import { getCookie} from "cookies-next"
const BASE_URL = 'http://ibssolution-001-site1.htempurl.com';

const axiosInstance = axios.create(
    {
        baseURL: BASE_URL,
        headers:{
            "Content-Type": "application/json"
        }
    }
);

axiosInstance.interceptors.request.use((config)=>{
    const token = getCookie("token");
    config.headers["Content-Type"] = "application/json";

    if(token){
        config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
},
    (error)=>Promise.reject(error)
) 

const adminAuthApi = {
    signup: (userData:any)=>axiosInstance.post("/api/admin/register", userData),
    login: (userData:any)=>axiosInstance.post("/api/admin/login", userData),
    firstSignupForm:(userData:any)=>axiosInstance.post("/api/admin/updatefirsttimeuser",userData)
}

export {adminAuthApi}