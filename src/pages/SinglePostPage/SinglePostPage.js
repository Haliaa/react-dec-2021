import {useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {postsService} from "../../services";
import {PostDetails} from "../PostDetails/PostDetails";

const SinglePostPage = () => {
    const {state} = useLocation()
    const [post, setPost] = useState(state)
    const {id}= useParams()


    useEffect(()=>{
        if(!state){
                    postsService.getByIdPost(id).then(({data})=>setPost(data))
        }else {
            setPost(state)
        }
        },[id, state])

    return (
        <div>
            {post && <PostDetails post={post}/> }
        </div>
    );
};

export {SinglePostPage};