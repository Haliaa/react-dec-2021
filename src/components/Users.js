import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {loadUsers} from "../redux/actions";

export function Users () {
    let defaultRootStateUsers = useSelector(state=>state.usersState)
    let dispatch = useDispatch()

    // console.log(defaultRootState)

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => loadUsers(value,dispatch))
            },[])

    return (
        <div>
            {defaultRootStateUsers.map(value=><div key={value.id}>{value.name}</div>)}
        </div>
    );
};
