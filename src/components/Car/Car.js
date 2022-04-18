import {carService} from "../../services";

const Car = ({car,setUserForUpdate}) => {
    const {id, model, price, year} = car
    const deleteCar = async ()=> {
       await carService.deleteById(id)
    }
    return (
        <div>
            <div>id:{id}</div>
            <div>model:{model}</div>
            <div>price:{price}</div>
            <div>year:{year}</div>
            <br/>
            <button onClick={()=>{deleteCar()}}>delete</button>
            <button onClick={()=>{setUserForUpdate(car)}}>update</button>
        </div>
    );
};

export default Car;