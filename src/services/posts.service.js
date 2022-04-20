import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";

const postsService = {
    getAllPosts: ()=>axiosService.get(urls.posts),
    getByIdPost:(id)=>axiosService.get(`${urls.posts}/${id}`)
}

export {postsService}