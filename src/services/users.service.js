import {axiosService} from "./axios.service";
import {urls} from "../constants";

const usersService = {
    getAllUsers: ()=> axiosService.get(urls.users)
}

export {usersService}