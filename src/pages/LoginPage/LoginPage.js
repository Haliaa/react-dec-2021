import {useAuth} from "../../hooks";
import {useLocation} from "react-router-dom";
import {useRef} from "react";

const LoginPage = () => {
   const {logIn}=useAuth()
    const {state} = useLocation()
    const name = useRef()
    return (
        <div>
            <input type='text' ref={name} placeholder={'name'}/>
            <button onClick={}></button>
        </div>
    );
};

export {LoginPage};