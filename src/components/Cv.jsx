import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {hideExperience} from '../actions';
import Experiences from './Experiences.jsx';
import _ from 'lodash';

class Cv extends Component {
  handleHideClick(id) {
    const { dispatch } = this.props;

   dispatch(hideExperience(id));
  }

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
      <div className="container">
        <Experiences onHideClick={ (e) => this.handleHideClick(e) } type="Work Life Experiences" experiences={work}/>
        <Experiences onHideClick={ this.handleHideClick } type="Commission of Trust" experiences={commisions}/>
        <Experiences onHideClick={ this.handleHideClick } type="Education" experiences={education}/>
        <Experiences onHideClick={ this.handleHideClick } type="Other" experiences={other}/>
      </div>
    )
  }
}

Cv.propTypes = {
  experiences: PropTypes.arrayOf(PropTypes.shape({
    from: PropTypes.string.isRequired
  })),
  details: PropTypes.object.isRequired
}

function select(state) {
  let filteredExperiences = state.experiences.filter( (exp) => {
    return exp.status !== 'HIDE';
  })
  return {
    experiences: filteredExperiences,
    details: state.details
  }
}

export default connect(select)(Cv);
