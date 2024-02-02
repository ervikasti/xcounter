import { useState } from "react"

export default function Counter (){

    const [count,setCount] = useState(0);

    const handleChangeIncrement = () => {
        setCount( currvalue => currvalue+1);
    }

    const handleChangeDecrement = () => {
        setCount( currvalue => currvalue-1);
    }

    return(
        <div>
            <h1>Counter App</h1>
            <p>Count: {count}</p>
            <button onClick={handleChangeIncrement}>Increment</button>
            <button onClick={handleChangeDecrement}>Decrement</button>
        </div>
    )
} 