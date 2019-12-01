import React, { useEffect, useRef} from 'react'
import { width } from 'dom-helpers';

export default function useEffectDemo(props) {
    const moveRef = useRef()
    let timer = null
    const { top = 100, left = 100} = props
    useEffect(() => {
        console.log('进入')
        const div = moveRef.current
        let curTimes = 0 //移动的次数
        const disX = top / 100
        const disY = left / 100
        timer = setInterval(() => {
            curTimes++
            const newLeft = curTimes * disY
            const newTop = curTimes * disX
            div.style.left = newLeft + 'px'
            div.style.top = newTop + 'px'
            if(curTimes === 100) {
                clearInterval(timer)
            }
        }, 10);
        return () => {
            console.log('清理')
            clearInterval(timer)
        };
    }, [top,left])
    return (
            <div ref= {moveRef} style={{
            position: 'absolute',
            backgroundColor: '#f40',
            width: 100,
            height: 100,
            opacity: 0.5
            }}>我是一个块  
        </div>
        
    )
}
