import {useDispatch} from "react-redux";
import {carActions} from "../redux";
import {useNavigate} from "react-router-dom";

const CarDetails = ({car, car:{id,model,price,year}}) => {

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const deleteById= async () => {
        await dispatch(carActions.deleteById({id}))
        navigate('/cars')
    }
    const updateById= () => {
        dispatch(carActions.setCarForUpdate({car}))
    }
    return (
        <div>
            <h2>id:{id}</h2>
            <h2>model:{model}</h2>
            <h2>price:{price}</h2>
            <h2>year:{year}</h2>
            <button onClick={deleteById}>delete</button>
            <button onClick={updateById}>update</button>
        </div>
    );
};

export {CarDetails};