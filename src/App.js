import {Form, Cats} from "./components";
import {Dogs} from "./components/Dogs";

const App = () => {
    return (
        <div>
            <Form/>
            <h1>Cats:</h1>
            <Cats/>
            <hr/>
            <h1>Dogs:</h1>
            <Dogs/>
        </div>
    );
};

export default App;