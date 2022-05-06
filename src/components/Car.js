// import {carActions} from "../redux";
// import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

const Car = ({car, car: {id, model, price, year}}) => {

    // const dispatch = useDispatch()

    // const deleteById= async () => {
    //     await dispatch(carActions.deleteById({id}))
    // }
    // const updateById= () => {
    //     dispatch(carActions.setCarForUpdate({car}))
    // }

    return (
        <div>
            {id} -- {model} -- {price} -- {year}
            <Link to={id.toString()} state={car}>
                <button>Info</button>
            </Link>
            {/*<button onClick={deleteById}>delete</button>*/}
            {/*<button onClick={updateById}>update</button>*/}
        </div>
    );
};

export {Car};