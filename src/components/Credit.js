import React, { PropTypes } from 'react'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import './Credit.css'

const Credit = ({creditID, current, lastCost, lastWin}) => (
  <div className="Credit">
    <div className="Credit-current">{current} €</div>
    <div className="Credit-last">
      <CSSTransitionGroup
        style={{position: 'relative', width: '100%'}}
        transitionName="Credit-action"
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={0}>
        <div key={creditID} className="Credit-cost Credit-action">- {lastCost} €</div>
      </CSSTransitionGroup>
      <CSSTransitionGroup
        style={{position: 'relative', width: '100%'}}
        transitionName="Credit-action"
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={0}>
        <div key={creditID} className="Credit-win Credit-action">+ {lastWin} €</div>
      </CSSTransitionGroup>
    </div>
  </div>
)

export default Credit
