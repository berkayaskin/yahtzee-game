import React from 'react';
import './Die.css'

const Die = props => (
    <button
        className='Die'
        style={{backgroundColor: props.locked ? "grey" : "black"}}
        onClick={() => props.handleClick(props.idx)}
    >
        {props.val}
    </button>
);

export default Die;
