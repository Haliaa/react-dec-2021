import {useRef} from "react";
import {useDispatch} from "react-redux";
import {catActions} from "../redux";

const CatForm = () => {

    const catInput= useRef();
    const dispatch = useDispatch()

    return (
        <div>
            <div>
                <input type='text' ref={catInput} placeholder='enter cat name'/>
                <button onClick={() => dispatch(catActions.add({name: catInput.current.value}))}>Add cat</button>
            </div>
            <hr/>
        </div>
    );
};

export {CatForm};