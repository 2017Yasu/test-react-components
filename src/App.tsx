import SampleFunctionComponent from './components/sample-function-component';
import FunctionMemoComponent from './components/function-memo-component';
import FunctionCallbackComponent from './components/function-callback-component';
import Clock from './components/class-lifecycle-component';

import './App.css';

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
        </div>
    );
}

export default App;
