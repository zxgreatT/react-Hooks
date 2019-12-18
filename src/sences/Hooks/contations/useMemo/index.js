import React, {useState, useMemo} from 'react'


class Test extends React.PureComponent{
    
    render() {
        console.log('test render')
        return (
            <div>
                <h1>{this.props.text}</h1>
                <button onClick={this.props.onClick}>改变文本</button>
            </div>
        )
    }
}

const Item = (props) => {
    console.log('Item render')
    return (<li>{props.value}</li>)
}

export default function useMeno() {
    console.log('useMemo render')
    const [text, setText] = useState(1)
    const [n, setN] = useState(0)
    const [range, setRange] = useState({min: 1, max: 1000})
    const list = useMemo(() => {
        const list = []
        for(let i = range.min;i <= range.max; i++){
            console.log(i)
            list.push(<Item key={i} value={i}></Item>)
        }
        return list
    }, [range])
    return (
        <div>
             {/* <Test text={text} onClick={useCallback(
                 () => {
                    setText(Math.random())
                 },
                 [text]
             )}/> */}
            <input type='number' onChange={(e) => {
                setN(parseInt(e.target.value))
            }} value={n}/>
            <ul>
                {list}
            </ul>
        </div>
    )
}
