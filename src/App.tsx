import SampleFunctionComponent from './components/sample-function-component/SampleFunctionComponent';
import FunctionMemoComponent from './components/function-memo-component';

import './App.css';

function App(): JSX.Element {
    return (
        <div className="App">
            <SampleFunctionComponent />
            <FunctionMemoComponent />
        </div>
    );
}

export default App;
