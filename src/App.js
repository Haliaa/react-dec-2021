import {Routes,Route, Navigate} from "react-router-dom"
import {MainLayout} from "./layouts";
import {EpisodesPage} from "./pages";
import {CharactersPage} from "./pages";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'episodes'}/>}/>
                    <Route path={'episodes'} element={<EpisodesPage/>}/>
                    <Route path={'characters'} element={<CharactersPage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export {App};