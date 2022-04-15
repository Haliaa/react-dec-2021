import {useState} from "react";

import css from './App.module.css'
import {Users, UserDetails, Posts} from "./components";
import {postsService} from "./services";

function App() {
    const [userDetails, setUserDetails] = useState(null)
    const [posts, setPosts] = useState([])

    const getUserId = async (userId) => {
        const {data} = await postsService.getAllPosts(userId)
        setPosts(data)
    }
    const trigger = () => {
        setPosts([])
    }
    return (
        <div>
            <div className={css.wrap}>
                <Users setUserDetails={setUserDetails} trigger={trigger}/>
                {userDetails && <UserDetails userDetails={userDetails} getUserId={getUserId}/>}
            </div>
            <hr/>
            <hr/>
            <hr/>
            <div><Posts posts={posts}/></div>
        </div>
    )
}

export default App;





