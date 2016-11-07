import React from 'react';
import Radium from 'radium';

let style = {
  timedivider: {
    padding: '4px',
    '@media (min-width: 700px)': {
      display: 'block'
    }
  },
  timeframe: {
    alignSelf: 'center',
    '@media (min-width: 700px)': {
      minWidth: '200px',
    },
    '@media (max-width: 700px)': {
      display: 'flex',
      flexDirection: 'row',
      marginTop: '20px',
      marginBottom: '20px'
    },
    fontSize: '14px',
    textAlign: 'center',
    fontFamily: 'Poiret One',
  }
}
export default Radium(React.createClass({
  propTypes: {
    from: React.PropTypes.string.isRequired
  },

  render() {
    let {to, from} = this.props;
    var toTime = (
      <div style={style.inline}>
        <span style={style.timedivider}>-</span>
        <span>{to}</span>
      </div>
    )

    let shouldShowTo = function (from, to) {
      if (from == to)
        return false
      return true
    }

    return (
      <div style={style.timeframe}>
        <span>{from}</span>
        { shouldShowTo(from, to) ? toTime : null }
      </div>
    )
  }
}));

