import {useDispatch, useSelector} from "react-redux";
import {counterActions} from "../redux";

const Counter = () => {
    const {count1, count2} = useSelector(state => state.counter);
    const dispatch = useDispatch()
    return (
        <div>
            <div><h1>Count1: {count1}</h1>
                <button onClick={() => dispatch(counterActions.incCount1())}>INC</button>
                <button onClick={() => dispatch(counterActions.decCount1())}>DEC</button>
                <button onClick={() => dispatch(counterActions.resetCount1(0))}>RESET</button>
            </div>

            <div><h1>Count2: {count2}</h1>
                <button onClick={() => dispatch(counterActions.incCount2())}>INC</button>
                <button onClick={() => dispatch(counterActions.decCount2())}>DEC</button>
                <button onClick={() => dispatch(counterActions.resetCount2())}>RESET</button>
            </div>
        </div>
    );
};

export {Counter};