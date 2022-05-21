import {FC} from "react";
import {CarForm, Cars} from "../../components";
import {Outlet} from "react-router-dom";
import css from './CarPage.module.css'

const CarPage:FC= () => {
    return (
        <div className={css.wrap}>
            <CarForm/>
            <div>
                <Cars/>
                <Outlet/>
            </div>
        </div>
    );
};

export {CarPage};