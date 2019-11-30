import React, { useState } from 'react'
import UseEffectDemo from '../Hooks/contations/useEffect'


export default function Hooks() {
    console.log('😆',123)
    const [count, setCount] = useState(0)
    const [visb, setVisb] = useState(true)
    return <div >
        <div style={{display:visb ? 'block' : 'none'}}>
        <button 
            onClick={
                () => {
                    // setCount((prevCount) => {return prevCount + 1})
                    // setCount((prevCount) => {return prevCount + 1})  
                    setCount(count + 1)
                    
                }
            }
        >+</button>
        <span>{count}</span>
        <button
            onClick={
                () => {
                    setCount(1) 
                }
            }
        >-</button>
        {visb && <UseEffectDemo />}
        </div>
        <p>
            <button
                onClick={
                    () => {
                        setVisb(!visb)
                    }
                }
            >点击</button>
        </p>
    </div>
}