import React from 'react';

export default class Counter extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };
    }

    updateCounter() {
        this.setState((state, props) => ({
            count: state.count + 1
        }));
    }

    render() {
        return (
            <button onClick={() => this.updateCounter()}>Count: {this.state.count}</button>
        );
    }

}