import React from 'react';

export default function Square(props) {

    const boxStyle = {
        width: props.width,
        height: props.height,
        backgroundColor: props.backgroundColor,
        margin: '5px'
    };

    return <div style={boxStyle} />
}