import React, { useState } from 'react'
import UseEffectDemo from '../Hooks/contations/useEffect'


export default function Hooks() {
    console.log('😆',123)
    const [count, setCount] = useState(0)
    const [visb, setVisb] = useState(true)
    const [point, setPoint] = useState({x: 0, y: 0})
    console.log(point)
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
        {visb && <UseEffectDemo left={point.x} top={point.y}/>}
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
        <div style={{position: 'absolute', top: 500, left: 500}}>
            <input placeholder='输入x的值'  onChange={
                (e) => {
                    setPoint({...point, x: parseInt(e.target.value)})    
                }
            }/>
            <input placeholder='输入y的值' onChange={
                (e) => {
                    setPoint({...point, y: parseInt(e.target.value)})
                }
            }/>
            <button onClick={
                () => {
                    console.log(point)
                }
            }>naniu</button>
         </div>
    </div>
}