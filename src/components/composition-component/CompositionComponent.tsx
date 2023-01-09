import { ReactNode, CSSProperties } from 'react';

import './CompositionComponent.scss';

type Props = {
    color: string;
    title: string;
    children?: ReactNode;
};

export default function CompositionComponent(props: Props): JSX.Element {
    const style: CSSProperties = {
        borderColor: props.color,
    };
    return (
        <>
            <div
                className='CompositionComponent'
                style={style}
            >
                <h1 className='component-title'>{props.title}</h1>
                {props.children}
            </div>
        </>
    );
}
