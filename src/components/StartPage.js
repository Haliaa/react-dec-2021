import {Outlet} from 'react-router-dom'
const StartPage = () => {
    return (
        <div>
            StartPage
            <hr/>
            <Outlet/>
        </div>
    );
};

export {StartPage};