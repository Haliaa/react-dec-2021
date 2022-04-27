import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {loadPosts} from "../redux/actions";

const Posts = () => {
    let defaultRootStatePosts = useSelector(state => state.postsState)
                      // OR    useSelector( ({postState})=>postState )
    let dispatch = useDispatch()

    useEffect(()=>{
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(value => value.json())
        // .then(value=>loadPosts(value,dispatch))
        dispatch(loadPosts())
    },[])


    return (
        <div>
            {defaultRootStatePosts.map(value=><div key={value.id}>{value.title}</div>)}
        </div>
    );
};

export {Posts};