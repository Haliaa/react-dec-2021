import {FC} from "react";
import {IUser} from "../../interfaces";

interface IProps{
    user:IUser
}

const User:FC<IProps> = ({user:{id,name,username,email}}) => {

    return (
        <div>
            <h3>{id} {name}</h3>
            <h4>{username}</h4>
            <div>{email}</div>
        </div>
    );
};

export {User};