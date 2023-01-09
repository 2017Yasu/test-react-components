import CompositionComponent from './components/composition-component';
import SampleFunctionComponent from './components/sample-function-component';
import FunctionMemoComponent from './components/function-memo-component';
import FunctionCallbackComponent from './components/function-callback-component';
import Clock from './components/class-lifecycle-component';
import LiftingStateUpComponent from './components/lifting-state-up-component';
import SuspenseComponent from './components/suspense-component';

import './App.scss';

function App(): JSX.Element {
    const defaultBorderColor = '#92DBFF';
    return (
        <div className="App">
            <CompositionComponent
                color={defaultBorderColor}
                title='SampleFunctionComponent'
            >
                <SampleFunctionComponent />
            </CompositionComponent>
            <CompositionComponent
                color={defaultBorderColor}
                title='FunctionMemoComponent'
            >
                <FunctionMemoComponent />
            </CompositionComponent>
            <CompositionComponent
                color={defaultBorderColor}
                title='FunctionCallbackComponent'
            >
                <FunctionCallbackComponent />
            </CompositionComponent>
            <CompositionComponent
                color={defaultBorderColor}
                title='Clock'
            >
                <Clock />
            </CompositionComponent>
            <CompositionComponent
                color={defaultBorderColor}
                title='LiftingStateUpComponent'
            >
                <LiftingStateUpComponent />
            </CompositionComponent>
            <CompositionComponent
                color={defaultBorderColor}
                title='SuspenseComponent'
            >
                <SuspenseComponent />
            </CompositionComponent>
        </div>
    );
}

export default App;
