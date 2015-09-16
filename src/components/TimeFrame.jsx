import React from 'react';

let style = {
  timedivider: {
    padding: "4",
    display: 'block'
  },
  timeframe: {
    alignSelf: 'center',
    minWidth: "200px",
    fontStyle: 'italic',
    fontSize: '14px',
    textAlign: 'center',
    fontFamily: 'Poiret One'
  }
}
export default React.createClass({
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
});

