import {Button} from "../Button/Button";
import {useNavigate} from "react-router-dom"
const User = ({user}) => {
    const navigate = useNavigate()
    const {id, name, username}=user
    return (
        <div>
            {id}--{name}--{username}<Button to={`${id}`} state={user}>get details</Button>
            {/*/!*{id}--{title} <button onClick={()=>navigate('/users')}>go to</button>*!/ переходить на сторінку users*/}
            {/*{id}--{title} <button onClick={()=>navigate(id.toString())}>go to</button>*/}
        </div>
    );
};


export {User};