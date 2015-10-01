import React from 'react';
import Experiences from './Experiences.jsx'
import Header from './Header.jsx';
import _ from 'lodash';

export default React.createClass({
  propTypes: {
    experiences: React.PropTypes.array.isRequired,
    details: React.PropTypes.object.isRequired
  },
  getWorkExperience: function() {
  },
  render() {
    let {experiences, details} = this.props;

    let work = _.filter(experiences, (exp) => {
      return exp.type === 'WORK';
    });

    let other = _.filter(experiences, (exp) => {
      return exp.type === 'OTHER';
    });

    let commisions = _.filter(experiences, (exp) => {
      return exp.type === 'COMMISSION';
    });

    let education = _.filter(experiences, (exp) => {
      return exp.type === 'EDUCATION';
    });

    return (
      <div>
        <Header details={details} />
        <Experiences type="Work" experiences={work}/>
        <Experiences type="Other" experiences={other}/>
        <Experiences type="Commission of Trust" experiences={commisions}/>
        <Experiences type="Education" experiences={education}/>
      </div>
    )
  }
});

