import React, { useState, useEffect, useRef } from 'react'



export default function RefHooks() {
    const [n, setN] = useState(10)
    // const timerRef = useRef()
    const nRef = useRef(n)
    const intRef = useRef()
    useEffect(() => {
        console.log(123)
        // if(n === 0) {
        //     return
        // }
        // timerRef.current = setTimeout(() => {
        //     console.log(n)
        //     setN(n-1)
        // },1000)
        const timer = setInterval(() => {
            nRef.current--
            setN(nRef.current)
            if (nRef.current == 0) {
                clearInterval(timer)
            }
        }, 1000);
        return () => {
            clearTimeout(timer)
        }
    }, [])
    return (
        <div>
            <h1>{n}</h1>
            <input ref={intRef} onChange={() => {
                console.dir(intRef.current)
            }} />
            <button onClick={() => {
                intRef.current.focus()
            }}>点击</button>
        </div>
    )
}
