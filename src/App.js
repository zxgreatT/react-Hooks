import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hooks from '../src/sences/Hooks'
import Demo from './sences/Hooks'
import RefHookDemo from './sences/Hooks/contations/RefHooks'
import ReactTransition from './sences/react-transition/transition'
import UseCallbackDemo from './sences/Hooks/contations/useCallback'
import UseMemoDemo from './sences/Hooks/contations/useMemo'
import UseImperativeHandleDemo from './sences/Hooks/contations/useImperativeHandle'
import UseLayoutEffectDemo from './sences/Hooks/contations/useLayoutEffect'

function App() {
  return (
          <div>
            <UseLayoutEffectDemo />
            {/* <UseImperativeHandleDemo /> */}
            {/* <UseMemoDemo /> */}
            {/* <UseCallbackDemo /> */}
            {/* <Hooks /> */}
            {/* <Demo /> */}
            {/* <RefHookDemo /> */}
            {/* <ReactTransition /> */}
          </div>

  );
}

export default App;
