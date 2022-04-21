import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";

const postsService = {
    getAllPosts: (page,_limit=2) => axiosService.get(urls.posts,{
        params:{
            _start:(page-1)*_limit,
            _limit
        }
    }),
    getByIdPost:(id)=>axiosService.get(`${urls.posts}/${id}`)
}

export {postsService}