import {LOAD_POSTS, LOAD_USERS} from "./actions";

export const loadUsersData = (payload) => {
  return {type:LOAD_USERS, payload}
}
export const loadPostsData = (payload) => {
  return {type:LOAD_POSTS, payload}
}