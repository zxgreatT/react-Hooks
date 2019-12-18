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

export default function useCallbackDemo() {
    console.log('useCallbackDemo render')
    const [text, setText] = useState(1)
    const [n, setN] = useState(0)
    return (
        <div>
             <Test text={text} onClick={useMemo(() => () => {
                 setText(Math.random())
             }, [text])}/>
            <input type='number' onChange={(e) => {
                setN(parseInt(e.target.value))
            }} value={n}/>
        </div>
    )
}
