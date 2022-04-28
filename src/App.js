import {CatForm, Cats} from "./components";
import {Dogs} from "./components/Dogs";
import {DogForm} from "./components/DogForm";

const App = () => {
    return (
        <div>
            <h1>Cats:</h1>
            <CatForm/>
            <Cats/>
            <h1>Dogs:</h1>
            <DogForm/>
            <Dogs/>
        </div>
    );
};

export default App;