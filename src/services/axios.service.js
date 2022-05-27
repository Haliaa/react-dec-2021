import axios from "axios";
import {createBrowserHistory} from "history";

import {authService} from "./auth.service";
import {baseURL} from "../constants";

const history = createBrowserHistory()
const axiosService = axios.create({baseURL})
let isRefreshing = false


axiosService.interceptors.request.use((config)=>{
    const access = localStorage.getItem('access');
    if (access){
     config.headers.Authorisation = `Bearer ${access}`
    }
    return config
})

axiosService.interceptors.response.use(
    (config)=>{
    return config
},
    async (error)=>{
        const refreshToken = localStorage.getItem('refresh');
        if(error.response?.status === 401 && error.config && !isRefreshing&&refreshToken){
            isRefreshing=true
            try {
                const {data} = await authService.refresh(refreshToken);
                const {access, refresh} = data
                localStorage.setItem('access',access)
                localStorage.setItem('refresh',refresh)
            }catch (e){
                localStorage.clear()
                history.replace('/login?expSession=true')
            }
            isRefreshing=false
            return axiosService.request(error.config)
        }
        return Promise.reject(error)
    })
export {
    axiosService,history
}