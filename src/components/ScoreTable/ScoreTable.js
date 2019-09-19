import React from 'react';
import RuleRow from "../RuleRow/RuleRow";
import './ScoreTable.css'
import { ones, twos, threes, fours, fives, sixes, threeOfKind, fourOfKind, fullHouse, smallStraight, largeStraight, yahtzee, chance } from '../../Rules';

const ScoreTable = props => (
    <div className='ScoreTable'>
        <section className='ScoreTable-section'>
            <h2>Upper</h2>
            <table cellSpacing='0'>
                <tbody>
                    <RuleRow name="Ones" score={props.scores.ones} doScore={e => props.doScore("ones", ones.evalRoll)} />
                    <RuleRow name="Twos" score={props.scores.twos} doScore={e => props.doScore("twos", twos.evalRoll)} />
                    <RuleRow name="Threes" score={props.scores.threes} doScore={e => props.doScore("threes", threes.evalRoll)} />
                    <RuleRow name="Fours" score={props.scores.fours} doScore={e => props.doScore("fours", fours.evalRoll)} />
                    <RuleRow name="Fives" score={props.scores.fives} doScore={e => props.doScore("fives", fives.evalRoll)} />
                    <RuleRow name="Sixes" score={props.scores.sixes} doScore={e => props.doScore("sixes", sixes.evalRoll)} />
                </tbody>
            </table>
        </section>
        <section className='ScoreTable-section ScoreTable-section-lower'>
            <h2>Lower</h2>
            <table cellSpacing='0'>
                <tbody>
                    <RuleRow name="Three of Kind" score={props.scores.threeOfKind} doScore={e => props.doScore("threeOfKind", threeOfKind.evalRoll)} />
                    <RuleRow name="Four of Kind" score={props.scores.fourOfKind} doScore={e => props.doScore("fourOfKind", fourOfKind.evalRoll)} />
                    <RuleRow name="Full House" score={props.scores.fullHouse} doScore={e => props.doScore("fullHouse", fullHouse.evalRoll)} />
                    <RuleRow name="Small Straight" score={props.scores.smallStraight} doScore={e => props.doScore("smallStraight", smallStraight.evalRoll)} />
                    <RuleRow name="Large Straight" score={props.scores.largeStraight} doScore={e => props.doScore("largeStraight", largeStraight.evalRoll)} />
                    <RuleRow name="Yahtzee" score={props.scores.yahtzee} doScore={e => props.doScore("yahtzee", yahtzee.evalRoll)} />
                    <RuleRow name="Chance" score={props.scores.chance} doScore={e => props.doScore("sixes", chance.evalRoll)} />
                </tbody>
            </table>
        </section>
    </div>
);

export default ScoreTable;
