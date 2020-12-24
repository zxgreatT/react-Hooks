import React, {useState, useEffect} from 'react'

const data = [0,1,2,3,4,5,6,7]

const acyncFun = () => {
    const myPromise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(data)
        }, 3000)
    })
    return myPromise
}

const useList = () => {
    const [list, setList] = useState([])
    useEffect(() => {
        (async function() {
            const listdata = await acyncFun()
            setList(listdata)
        })()
    }, [])
    return list
}

export default function UseHooks() {
    const listdata = useList()
    console.log(listdata)
    const list = listdata.map(item => <li key={item}>{item}</li>)
    return (
        <div>
            <ul>
                {list}
            </ul>
        </div>
    )
}
