import React from 'react';
import './Dice.css'
import Die from "../Die/Die";

const Dice = props =>
    (
        <div className='Dice'>
            {
                props.dice.map((d, i) =>
                    <Die
                        handleClick={props.handleClick}
                        val={d}
                        locked={props.locked[i]}
                        i={i}
                        key={i}
                    />
                )
            }
        </div>
    )


export default Dice;
