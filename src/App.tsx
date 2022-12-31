import SampleFunctionComponent from './components/sample-function-component';
import FunctionMemoComponent from './components/function-memo-component';
import FunctionCallbackComponent from './components/function-callback-component';

import './App.css';

function App(): JSX.Element {
    return (
        <div className="App">
            <SampleFunctionComponent />
            <hr style={{ width: '100%' }} />
            <FunctionMemoComponent />
            <hr style={{ width: '100%' }} />
            <FunctionCallbackComponent />
        </div>
    );
}

export default App;
