import React from 'react';

import ClassLifecycleComponent from './ClassLifecycleComponent';

export default class Clock extends React.Component {
    render(): JSX.Element {
        return (
            <div>
                <ClassLifecycleComponent
                    title='Clock 1'
                />
            </div>
        );
    }
}
