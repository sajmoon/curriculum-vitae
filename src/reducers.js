import {combineReducers} from 'redux';
import {HIDE_EXPERIENCE} from './actions';
import _ from 'lodash';

function experiences(state = setID(defaultexperiences), action) {
  switch(action.type) {
    case HIDE_EXPERIENCE:
      let newState = _.map(state, (exp) => {
        if (exp.id === action.experience.id) {
          exp.status = 'HIDE';
        }
        return exp;
      });
      return newState;
    default:
      return state
  }
}

function setID(state) {
  return state.map( (exp, i) => {
    exp.id = i;
    return exp;
  });
}

let defaultDetails = {
  name: "Simon Ström",
  email: "simon.strom@gmail.com",
  phone: "+46 (0) 739 59 09 87",
  imgurl: "http://s.gravatar.com/avatar/26f491425e1e0507069ee7d86fa058ed?s=80",
  coverImg: "http://blog.simonstrom.xyz/assets/img/cover-1.jpg",
  address: {
    street: "Kungshamra 35/A",
    zip: "170 70",
    city: "Solna"
  },
  resources: [
    {title: 'LinkedIn', url: 'https://se.linkedin.com/in/simonstrom'},
    {title: 'GitHub', url: 'https://github.com/sajmoon/'}
  ]
}

function details(state = defaultDetails, action) {
  return state;
}

const defaultexperiences = [
  {
    from: 'Oct 2015',
    type: 'WORK',
    to: '',
    title: 'Software Developer',
    url: 'http://www.sqore.com/',
    at: 'Sqore',
    remarks: [
      'Front-end development',
      'Javascript, AngularJs'
    ]
  },
  {
    from: 'Dec 2014',
    type: 'WORK',
    to: 'Sept 2015',
    title: 'Software Developer',
    url: 'http://www.dewire.com/',
    subtitle: '',
    at: 'Dewire',
    remarks: [
      'Software developer with focus on Java/JavaEE',
      'Backend work',
      'AngularJs',
      'JavaEE',
      'Telecom'
    ]
  },
  {
    from: '2013',
    type: 'WORK',
    to: '2014',
    title: 'Software Developer',
    url: 'http://www.elva.se/',
    subtitle: '',
    at: 'Elva',
    remarks: [
      'Developer',
      'Java and JavaScript',
      'Internal projects'
    ]
  },
  {
    at: 'Hi3G (Tre)',
    type: 'WORK',
    url: 'https://tre.se/',
    from: '2012',
    to: '2013',
    title: 'Software Developer',
    subtitle: '',
    remarks: [
      'Small group of students, planing and executing a project.',
      'Working with Java, Ruby and Angular'
    ]
  },
  {
    at: 'Transitor AB',
    type: 'WORK',
    from: '2010',
    to: '2011',
    title: 'Software developer',
    url: 'http://www.comers.se/',
    subtitle: '',
    remarks: ['Worked with Java, creating a webapplication for bookings']
  },
  {
    at: 'Student Consulting',
    type: 'WORK',
    url: 'https://www.studentconsulting.com/',
    from: '2007',
    to: '2008',
    title: 'Reception duty',
    remarks: ['Reception', 'Handyman'],
    subtitle: ''
  },
  {
    at: 'Procter & Gamble',
    url: 'http://www.pg.com/',
    from: '2008',
    to: '2010',
    title: 'Several positions',
    remarks: ['Masterdata', 'Demand planer Duracel (summer intern)'],
    subtitle: '',
    type: 'WORK'
  },
  {
    at: 'Fastighets AB Brostaden',
    from: '2006',
    type: 'WORK',
    to: '2007',
    url: 'http://www.brostaden.se/',
    title: 'Landlord',
    subtitle: 'Summer Internship',
    remarks: ['Summer job working with customers', 'Cleaning, painting etc']
  },
  {
    at: 'Royal Institute of Technology',
    type: 'EDUCATION',
    url: 'www.kth.se',
    from: '2009',
    title: 'Computer Science',
    subtitle: 'Msc',
    remarks: ['Machine Learning']
  },
  {
    at: 'Samskolan Saltsjöbaden',
    type: 'EDUCATION',
    url: 'www.ibo.org',
    from: '2003',
    to: '2006',
    title: 'International baccalaureate',
    subtitle: '',
    remarks: ['Studied Math, Computer Science English on higher level.']
  },
  {
    at: 'THS',
    url: 'http://ths.kth.se/',
    from: '2013',
    type: 'COMMISSION',
    to: '2013',
    title: 'Event Coordinator',
    subtitle: 'Centralamottagningsgrupp',
    remarks: ['Organize events for new students at KTH']
  },
  {
    at: 'SSCO',
    url: 'http://www.ssco.se/en',
    from: '2013',
    type: 'COMMISSION',
    to: '2013',
    title: 'Event Coordinator',
    subtitle: 'Valborgsfamiljen',
    remarks: ['Organize a pub crawl for around 1000 students in Stockholm']
  },
  {
    at: 'Datasektionens Studieresa (Studs)',
    url: 'http://studieresan.se/',
    from: '2013',
    type: 'COMMISSION',
    to: '2013',
    title: 'Salesteam manager',
    subtitle: '',
    remarks: ['Responsible for all sales', 'Managed the team']
  },
  {
    at: 'Datasektionens Klubbmästeri, DKM',
    url: 'http://dkm.io/',
    from: '2009',
    type: 'COMMISSION',
    to: '2013',
    title: 'Klubbmästare & Barmästare',
    subtitle: '',
    remarks: ['Organiza all sorts of activities for students.', 'Lots of fun', 'Leader of a group of 14 people']
  },
  {
    at: 'Dartasektionens Mottagning',
    url: 'http://datasektionen.se/sektionen/mottagningen/',
    from: '2010',
    to: '2011',
    type: 'COMMISSION',
    title: '',
    subtitle: '',
    remarks: ['Reception of new students at KTH', 'Make them feel at home'],
  },
  {
    at: 'Quarnevalen',
    from: '2014',
    to: '2014',
    title: 'Tältchef',
    type: 'COMMISSION',
    subtitle: '',
    remarks: ['Organzie a huge event for students in Stockholm', 'Parade through town']
  },
  {
    at: 'THS',
    url: 'http://www.armada.nu/',
    type: 'COMMISSION',
    from: '2010',
    to: '2011',
    title: 'Armada',
    subtitle: 'Företagsvärd',
    remarks: ['A fare for students to find jobs', 'Helped Skype and Epsilon during the days.', 'Active for 2 years']
  },
  {
    at: 'Datasektionen',
    title: 'D-Dagen',
    type: 'COMMISSION',
    subtitle: 'Företagsvärd and directorate',
    url: 'http://datasektionen.se/naringsliv/d-dagen',
    from: '2009',
    to: '2013',
    remarks: ['Work fare for students interested in ComputerScience.', 'Helped organize it for 4 years']
  },
  {
    at: 'Försvarsmakten',
    from: '2006',
    type: 'OTHER',
    to: '2007',
    title: 'Stridsfordonsplutonbefäl',
    subtitle: 'Värnplikt',
    url: 'http://www.forsvarsmakten.se/',
    remarks: ['Military Service in Sweden', 'Leader of a pluton of around 60 people.']

  }
];

const cvApp = combineReducers({
  experiences,
  details
})

export default cvApp;

