import React from 'react';
import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';

function toCelsius(fahrenheit: number): number {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius: number): number {
    return celsius * 9 / 5 + 32;
}

function tryConvert(temperature: string, converter: (x: number) => number): string {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = converter(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

type State = {
    temperature: string;
    scale: string;
};

export default class LiftingStateUpComponent extends React.Component<unknown, State> {
    constructor(props: unknown) {
        super(props);
        this.state = {
            temperature: '',
            scale: 'c',
        };
    }

    handleCelsiusChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        this.setState(() => {
            return {
                temperature: e.target.value,
                scale: 'c',
            };
        });
    };

    handleFahrenheitChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        this.setState(() => {
            return {
                temperature: e.target.value,
                scale: 'f',
            };
        });
    };

    render(): JSX.Element {
        const celsius = this.state.scale === 'f' ?
            tryConvert(this.state.temperature, toCelsius) : this.state.temperature;
        const fahrenheit = this.state.scale === 'c' ?
            tryConvert(this.state.temperature, toFahrenheit) : this.state.temperature;
        return (
            <div>
                <TemperatureInput
                    scale='c'
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange}
                />
                <TemperatureInput
                    scale='f'
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange}
                />
                <BoilingVerdict
                    celsius={parseFloat(celsius)}
                />
            </div>
        );
    }
}
