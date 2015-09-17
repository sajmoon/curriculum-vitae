import React from 'react';
import Experiences from './Experiences.jsx'
import Header from './Header.jsx';

export default React.createClass({
  propTypes: {
    experiences: React.PropTypes.object.isRequired,
    details: React.PropTypes.object.isRequired
  },
  render() {
    let {experiences, details} = this.props;

    return (
      <div>
        <Header details={details} />
        <Experiences type="Work" experiences={experiences.work}/>
        <Experiences type="Education" experiences={experiences.education}/>
        <Experiences type="Commissions of Trust" experiences={experiences.commissions}/>
        <Experiences type="Other" experiences={experiences.other}/>
      </div>
    )
  }
});

