import React, { PropTypes } from 'react'
import Radium from 'radium'

const style = {
  timedivider: {
    padding: '4px',
    '@media (min-width: 700px)': {
      display: 'block'
    }
  },
  timeframe: {
    alignSelf: 'center',
    '@media (min-width: 700px)': {
      minWidth: '200px'
    },
    '@media (max-width: 700px)': {
      display: 'flex',
      flexDirection: 'row',
      marginTop: '20px',
      marginBottom: '20px'
    },
    fontSize: '14px',
    textAlign: 'center',
    fontFamily: 'Poiret One'
  }
}

function shouldShowTo(privateFrom, privateTo) {
  if (privateFrom === privateTo) {
    return false
  }
  return true
}

const propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string
}

const TimeFrame = (props) => {
  const { to, from } = props

  const toTime = (
    <div style={style.inline}>
      <span style={style.timedivider}>-</span>
      <span>{to}</span>
    </div>
  )

  return (
    <div style={style.timeframe}>
      <span>{from}</span>
      { shouldShowTo(from, to) ? toTime : null }
    </div>
  )
}

TimeFrame.propTypes = propTypes

export default Radium(TimeFrame)
