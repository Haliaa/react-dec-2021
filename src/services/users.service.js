import {axiosService} from "./axios.service";
import {urls} from "../constants";

const usersService={
    getAllUsers:()=>axiosService.get(urls.users),
    getByIdUser:(id)=>axiosService.get(`${urls.users}/${id}`)
}
export {usersService}