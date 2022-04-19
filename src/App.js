import {Cars,CarForm} from "./components";
import {useState} from "react";

const App = () => {
    const [newCar, setNewCar] = useState(null)
    const [updateCar, setUpdateCar] = useState(null)
    const [updatedCar, setUpdatedCar] = useState(null);

    return (
        <div>
            <CarForm setNewCar={setNewCar} updateCar={updateCar} setUpdatedCar={setUpdatedCar}/>
            <hr/>
            <Cars newCar={newCar} setUpdateCar={setUpdateCar} updatedCar={updatedCar}/>
        </div>
    );
};

export default App;