import {useCallback, useState} from "react";
import {Child} from "./Child";

const Main = () => {

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    // викликається завжди при зміні будь-чого
    const seyHey = () => {
        console.log('hey')
    }

    // викликається один раз при запуску
    // const seyHey = useCallback (() => {
    //     console.log('hey')
    // }, [])

    // викликається при зміні count2
    // const seyHey = useCallback (() => {
    //     console.log('hey')
    // }, [count2])

    return (
        <div>
            <h1>count1:{count1}</h1>
            <h1>count2:{count2}</h1>
            <Child sayHey={seyHey}/>
            <button onClick={()=>setCount1(prevState => prevState+1)}>count1</button>
            <button onClick={()=>setCount2(prevState => prevState+1)}>count2</button>
        </div>
    );
};

export {Main};