import {ClassComponent, FunctionComponent} from "./components";
import {useState} from "react";

const App = () => {
 const [flag, setFlag]= useState(true)
    return (
        // <div>        {/*Class*/}
        //     <div>{flag && <ClassComponent ssss={'MyProps'}/>}</div>
        //     <button onClick={()=>setFlag(prev=>!prev)}>Hide</button>
        // </div>
        <div>       {/*Function*/}
            <div>{flag && <FunctionComponent ssss={'MyProps'}/>}</div>
            <button onClick={()=>setFlag(prev=>!prev)}>Hide</button>
        </div>
    );
};

export default App;