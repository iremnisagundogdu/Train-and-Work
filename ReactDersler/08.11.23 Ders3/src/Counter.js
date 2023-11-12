import React,{useState} from 'react'

function Counter() {
const [count,setCount]=useState(0)

    const arttir=()=>{
        if(count<10){
        setCount(count+1)
        }
       

    }

    const azalt =()=>{
        
        if(count>0){
            setCount(count-1)
        }

    }

  return (
    <div>
        <h1>Count:{count}</h1>
        <button onClick={arttir}  type="button" className="btn btn-primary">Arttır</button>
        <button onClick={azalt}type="button" className="btn btn-danger">Azalt</button>
    </div>
  )
}

export default Counter