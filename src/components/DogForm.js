import {useRef} from "react";
import {useDispatch} from "react-redux";
import {dogActions} from "../redux";

const DogForm = () => {
    const dogInput= useRef();
    const dispatch = useDispatch()

    return (
        <div>
            <div>
                <input type='text' ref={dogInput} placeholder='enter dog name'/>
                <button onClick={() => dispatch(dogActions.add({name: dogInput.current.value}))}>Add dog</button>
            </div>
            <hr/>
        </div>
    );
};

export {DogForm};