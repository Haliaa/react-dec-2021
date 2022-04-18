import {axiosService} from "./axios.service";
import {urls} from "../constants";

const carService= {
    getAll:()=>axiosService.get(urls.cars), //витягаємо інф з сервера
    getById:(id)=>axiosService.get(`${urls.cars}/${id}`),
    create:(car)=>axiosService.post(urls.cars, car), //записуємо інф на сервера
    updateById:(id, newCar)=>axiosService.put(`${urls.cars}/${id}`, newCar), //записуємо інф на сервера
    deleteById:(id)=>axiosService.delete(`${urls.cars}/${id}`) //видаляємо інф з сервера
}
export {carService}