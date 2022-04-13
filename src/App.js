// import './App.module.css' //the same level(1)
// import '../public' //next level(2)
// import '../../mongoDB' //next level(3)
// import '../../../Desktop' //next level(4)...

// import FF, {hello1, hello2} from "./components/Users/Users"; //not default export
// import FF from "./components/Users/Users"; //can be renamed here

import css from './App.module.css'
import {SingleUser, Users} from "./components";
import {useState} from "react";
import {Form1} from "./components/Form1/Form1";
import {Form2} from "./components/Form2/Form2";

const App = () => {
    const [singleUser, setSingleUser] = useState(null);
    return (
        <div>
            {/*{singleUser && <SingleUser user={singleUser} />}*/}
            {/*<Users getUser={setSingleUser}/>*/}
            {/*<Form1/>*/}
            <Form2/>
        </div>
    );
};

export default App;
