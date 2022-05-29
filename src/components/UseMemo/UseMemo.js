import {useMemo, useState} from "react";

const summator = (n)=>{
    console.log('start')
    let sum = 0
    for (let i = 0; i < 1000000000; i++) {
        sum +=n;
    }
    console.log('finish')
    return sum
}

const UseMemo = () => {
    const [n,setN] = useState(5);
    const [count,setCount] = useState(0);

    // const number = summator(n); - відпрацьовує весь return

    const number = useMemo(()=>summator(n),[n])

        // - відпрацьовує лише раз,далі слідку за [n],
    // якщо n не змінюється то завжи повертає попередній результат
    // якщо n змінюється то запускає функцію, рахує


    return (
        <div>
            <h1>sum:{number}</h1>
            <h1>counter:{count}</h1>
            <button onClick={()=>setN(prevState => prevState+1)}>incN</button>
            <button onClick={()=>setCount(prevState => prevState+1)}>incCount</button>
        </div>
    );
};

export {UseMemo};