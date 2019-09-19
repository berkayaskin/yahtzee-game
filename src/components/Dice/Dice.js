import React from 'react';
import './Dice.css'
import Die from "../Die/Die";

const Dice = props =>
    <div className='Dice'>
        {props.dice.map((d, idx) =>
            <Die
                handleClick={props.handleClick}
                val={d}
                locked={props.locked[idx]}
                idx={idx}
                key={idx}
            />
        )}
    </div>


export default Dice;
