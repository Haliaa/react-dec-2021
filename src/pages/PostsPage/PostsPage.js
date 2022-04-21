import {useContext, useEffect, useState} from "react";
import {postsService} from "../../services";
import {Post} from "../../components";
import {Outlet, useSearchParams} from "react-router-dom"
import {MyContext} from "../../index";

const PostsPage = () => {
    // const value = useContext(MyContext)
    const [posts, setPosts]=useState([])
    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(()=>{
        postsService.getAllPosts(query.get('page'),10).then(({data})=>setPosts(data))
        // console.log(value)
        // value.name = 'Kate'
    },[query])

    const nextPage = () => {
      // let page = query.get('page')
      //   page = +page +1
      //   setQuery({page: page.toString()})
        const queryObj = Object.fromEntries(query.entries());
        queryObj.page++
        setQuery(queryObj);
    }
    return (
        <div style={{display:'flex'}}>
            <div>{posts.map(post => <Post key={post.id} post={post}/>)}
            <button onClick={()=>nextPage()}>next</button>
            </div>

            <div><Outlet/></div>
        </div>
    );
};

export {PostsPage};