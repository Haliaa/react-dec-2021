import {axiosService} from "./axios.service";
import {urls} from "../constants";

const episodeService = {
    getAll:(page)=>axiosService.get(urls.episode,{params:{page}})
}

export {episodeService}