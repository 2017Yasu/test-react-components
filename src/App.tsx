import SampleFunctionComponent from './components/sample-function-component';
import FunctionMemoComponent from './components/function-memo-component';
import FunctionCallbackComponent from './components/function-callback-component';
import Clock from './components/class-lifecycle-component';
import LiftingStateUpComponent from './components/lifting-state-up-component';

import './App.scss';

function App(): JSX.Element {
    return (
        <div className="App">
            <SampleFunctionComponent />
            <hr style={{ width: '100%' }} />
            <FunctionMemoComponent />
            <hr style={{ width: '100%' }} />
            <FunctionCallbackComponent />
            <hr style={{ width: '100%' }} />
            <Clock />
            <hr style={{ width: '100%' }} />
            <LiftingStateUpComponent />
        </div>
    );
}

export default App;
