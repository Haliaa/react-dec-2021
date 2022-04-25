import {Routes, Route} from "react-router-dom";
import {StartPage} from "./components/StartPage";
import {HzPage} from "./components/HzPage";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<StartPage/>}>
                <Route path={'hz'} element={<HzPage/>}></Route>
            </Route>
            <Route></Route>
            <Route></Route>
        </Routes>
    );
};

export default App;