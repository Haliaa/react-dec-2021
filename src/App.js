// import {useDispatch, useSelector} from "react-redux";
import {Users} from "./components/Users";
import {Posts} from "./components/Posts";

const App = () => {
    // let state = useSelector(state=>state)
    // let  dispatch = useDispatch()
    return (
        <div>
            <Users/>
            <hr/>
            <hr/>
            <hr/>
            <Posts/>
        </div>
    );
};

export default App;