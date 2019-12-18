import React, {useState, useRef, useEffect, useLayoutEffect} from 'react'

export default function useLayoutEffectDemo() {
    const [n, setN] = useState(0)
    const h1Ref = useRef()
    // useEffect(() => {
    //    h1Ref.current.innerText = Math.random().toFixed(2)
    // })
    useLayoutEffect(() => {
       h1Ref.current.innerText = Math.random().toFixed(2)
    })
    return (
        <div>
            <h1 ref={h1Ref}>{n}</h1>
            <button onClick={() => {
                setN(n + 1)
            }}>渲染</button>
        </div>
    )
}
