import {carService} from "../../services";

const Car = ({car,setDeletedCar, setUpdateCar}) => {
    const {id, model, price, year} =car
    const deleteCar = async ()=>{
        await carService.deleteById(id)
        setDeletedCar(id)
    }
    return (
        <div>
            <div>id:{id}</div>
            <div>Model:{model}</div>
            <div>Price:{price}</div>
            <div>Year:{year}</div>
            <br/>
            <button onClick={()=>{deleteCar()}}>delete</button>
            <button onClick={()=>{setUpdateCar(car)}}>update</button>
            <hr/>
        </div>
    );
};

export {Car}