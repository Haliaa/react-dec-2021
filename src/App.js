import {CarForm} from "./components";
import {Cars} from "./components/Cars/Cars";
import {useState} from "react";

const App = () => {
    const [newCar, setNewCar] = useState(null)
    const [userForUpdate, setUserForUpdate] = useState();
    return (
        <div>
            <CarForm setNewCar={setNewCar} userForUpdate={userForUpdate}/>
            <hr/>
            <Cars newCar={newCar} setUserForUpdate={setUserForUpdate}/>
        </div>
    );
};

export default App;