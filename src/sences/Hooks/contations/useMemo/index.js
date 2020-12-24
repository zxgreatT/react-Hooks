import React, {useState, useMemo} from 'react'




const Item = (props) => {
    console.log('Item render')
    return (<li>{props.value}</li>)
}

export default function useMeno() {
    console.log('useMemo render')
    const [n, setN] = useState(0)
    const [range, setRange] = useState({min: 1, max: 1000})
    // const list = useMemo(() => {
    //     const list = []
    //     for(let i = range.min;i <= range.max; i++){
    //         console.log(i)
    //         list.push(<Item key={i} value={i}></Item>)
    //     }
    //     return list
    // }, [range])
    const list = () => {
        const list = []
        for(let i = range.min;i <= range.max; i++){
            console.log(i)
            list.push(<Item key={i} value={i}></Item>)
        }
        return list
    }
    return (
        <div>
            <input type='number' onChange={(e) => {
                setN(parseInt(e.target.value))
            }} value={n}/>
            <ul>
                {list()}
            </ul>
        </div>
    )
}
