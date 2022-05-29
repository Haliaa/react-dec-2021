import {useEffect} from "react";

const Child = ({sayHey}) => {

    useEffect(()=>{
        console.log('update Child component');
    }, [sayHey])

    return (
        <div>
            <button onClick={sayHey}>say</button>
        </div>
    );
};

export {Child};