import React from 'react';
import './RuleRow.css'

const RuleRow = props => (
    <tr
        className='RuleRow RuleRow-active'
        onClick={props.doScore}
    >
        <td className='RuleRow-name'>{props.name}</td>
        <td className='RuleRow-score'>{props.score}</td>
    </tr>
);

export default RuleRow;
