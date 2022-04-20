import {Button} from "../Button/Button";
import {useNavigate} from "react-router-dom"
const Post = ({post}) => {
    const navigate = useNavigate()
    const {id, title}=post
    return (
        <div>
            {id}--{title}<Button to={`${id}`} state={post}>get details</Button>
            {/*/!*{id}--{title} <button onClick={()=>navigate('/users')}>go to</button>*!/ переходить на сторінку users*/}
            {/*{id}--{title} <button onClick={()=>navigate(id.toString())}>go to</button>*/}
        </div>
    );
};

export {Post};