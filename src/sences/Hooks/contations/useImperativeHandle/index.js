import React, {useImperativeHandle,useRef} from 'react'

const Test = (props, ref) => {
    useImperativeHandle(
        ref,
        () => {
            console.log('👌')
            return 1
        },
        []
    )
    return (<h1>Test render</h1>)
}

const TestWrapper = React.forwardRef(Test)

export default function useImperativeHandleDemo() {
    const testRef = useRef()
    return (
        <div>
            <TestWrapper ref={testRef}/>
            <button onClick={() => {
                console.log(testRef)
            }}>按钮</button>
        </div>
    )
}
