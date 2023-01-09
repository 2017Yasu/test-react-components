import React, { Suspense } from 'react';

const LazyComponent = React.lazy(() => import('./LazyComponent'));

export default function SuspenseComponent(): JSX.Element {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <LazyComponent />
            </Suspense>
        </div>
    );
}
