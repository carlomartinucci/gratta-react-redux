import React from 'react'
import PropTypes from 'prop-types';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import './Credit.css'

const Credit = ({creditID, current, lastCost, lastWin}) => (
  <div className="Credit">
    <CSSTransitionGroup
      transitionName="Credit-current"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}>
      <div key={creditID} className="Credit-current">
        {current} €
      </div>
    </CSSTransitionGroup>
    
    <div className="Credit-last">
      <CSSTransitionGroup
        style={{position: 'relative', width: '100%'}}
        transitionName="Credit-action"
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={0}>
        <div key={creditID} className="Credit-cost Credit-action">
          - {lastCost} €
        </div>
      </CSSTransitionGroup>
      <CSSTransitionGroup
        style={{position: 'relative', width: '100%'}}
        transitionName="Credit-action"
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={0}>
        <div key={creditID} className="Credit-win Credit-action">
          + {lastWin} €
        </div>
      </CSSTransitionGroup>
    </div>
  </div>
)

Credit.PropTypes = {
  creditID: PropTypes.number,
  current: PropTypes.number,
  lastCost: PropTypes.number,
  lastWin: PropTypes.number
}

export default Credit
