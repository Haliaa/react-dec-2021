import {useEffect, useState} from "react";
import {carService} from "../../services";
import {Car} from "../Car/Car";

const Cars = ({newCar,setUpdateCar, updatedCar}) => {
   const [cars, setCars] = useState([])
   const [deletedCar, setDeletedCar] = useState(null)

    useEffect(()=>{
        carService.getAllCars().then(({data})=>setCars(data))
    },[deletedCar, setDeletedCar, updatedCar])

    useEffect(()=>{
        if (newCar){
            setCars(prevState=>[...prevState,newCar])
        }
    },[newCar])
    return (
        <div>
            {cars.map(car=><Car key={car.id} car={car} setDeletedCar={setDeletedCar} setUpdateCar={setUpdateCar}/>)}
        </div>
    );
};

export {Cars};