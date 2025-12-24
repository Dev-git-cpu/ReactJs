import { useState } from "react";
function Dev(){
let [counter,setCounter] = useState(0)

const addValue = () =>{
    setCounter(preCounter=>preCounter+1)
     setCounter(preCounter=>preCounter+1)
      setCounter(preCounter=>preCounter+1)

}

const removeValue = () =>{
    setCounter(counter - 1) 
}

const resetValue = () =>{
    setCounter(counter = 0)
}
    
    return (
        <>
        <h1>Counter Value: {counter}</h1>
        <button onClick={addValue}>Add Value</button>
        <button onClick={removeValue}>Remove Value</button>
        <button onClick={resetValue}>Reset</button>
        </>
    )
}

export default Dev;