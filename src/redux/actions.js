import {loadPostsData, loadUsersData} from "./action";

export const LOAD_USERS='LOAD_USERS'
export const LOAD_POSTS='LOAD_POSTS'

const loadUsers = ()=> async (dispatch) => {
   let users = await fetch('https://jsonplaceholder.typicode.com/users')
       .then(value => value.json())
        dispatch (loadUsersData(users))
}

const loadPosts = () =>async (dispatch) => {
  let posts = await fetch('https://jsonplaceholder.typicode.com/posts')
         .then(value => value.json())
          dispatch (loadPostsData(posts))
}

export {loadUsers,loadPosts}