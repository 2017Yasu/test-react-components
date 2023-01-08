import React from 'react';

const scaleNames: Record<string, string> = {
    c: 'Celsius',
    f: 'Fahrenheit',
};

type Props = {
    scale: string;
    temperature: string;
    onTemperatureChange: React.ChangeEventHandler<HTMLInputElement>;
};

export default class TemperatureInput extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render(): JSX.Element {
        const scale = this.props.scale in scaleNames ?
            scaleNames[this.props.scale] :
            undefined;
        return (
            <fieldset>
                <legend>Enter temperature in {scale}</legend>
                <input
                    value={this.props.temperature}
                    onChange={this.props.onTemperatureChange}
                />
            </fieldset>
        );
    }
}
