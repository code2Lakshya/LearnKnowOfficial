import { useEffect, useState } from "react";



const CounterCard=({max,heading,className})=>{

const [counter,setCounter]=useState(0);

useEffect(()=>{
    const interval=setInterval(()=>{
         setCounter(prev=> prev < max ? prev + 1 : prev )
    },10)
    return ()=> clearInterval(interval)
},[])

    return(
        <div className={`counter-card ${className ? className: ''}`}>
            <p>{counter}</p>
            <h3>{heading}</h3>
        </div>
    );
}
export default CounterCard;