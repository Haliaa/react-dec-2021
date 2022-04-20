import css from './Button.module.css'
import {Link} from "react-router-dom";
const Button = ({children, to, state, ...arg}) => {
    return (
        <Link to={to} state={state}>
            <button className={css.button} {...arg}>{children}</button>
        </Link>
    );
};

export {Button};