import React from 'react';

class Greeting extends React.Component {

    constructor(props) {
        super(props);
        // TODO Initialize any state here
    }

    render() {
        return (
            <p>Hello {this.props.firstName} {this.props.lastName}!</p>
        );
    }
}

// function Greeting(props) {
//     return (
//         <p>Hello {props.firstName} {props.lastName}!</p>
//     );
// }

export default Greeting;