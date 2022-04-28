import {useRef} from "react";
import {useDispatch} from "react-redux";
import {catActions, dogActions} from "../redux";

const Form = () => {

    const catInput= useRef();
    const dogInput= useRef();
    const dispatch = useDispatch()

    return (
        <div>
            <div>
                <input type='text' ref={catInput} placeholder='enter cat name'/>
                <button onClick={() => dispatch(catActions.add({name: catInput.current.value}))}>Add cat</button>
            </div>
            <hr/>
            <hr/>
            <hr/>
            <div>
                <input type='text' ref={dogInput} placeholder='enter dog name'/>
                <button onClick={() => dispatch(dogActions.add({name: dogInput.current.value}))}>Add dog</button>
            </div>
        </div>
    );
};

export {Form};