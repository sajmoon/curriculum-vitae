// import React from 'react';
var React = require('react');
import CV from './components/Cv.jsx';

const experiences = {
  work: [
    {
      from: 'Dec 2014',
      to: 'Sept 2015',
      title: 'Software Developer',
      url: 'http://www.dewire.com/',
      subtitle: 'Full time',
      at: 'Dewire',
      remarks: [
        'Software developer with focus on Java/JavaEE',
        'Backend work',
        'AngularJs'
      ]
    },
    {
      from: '2013',
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
      from: '2010',
      to: '2011',
      title: 'Software developer',
      url: 'http://www.comers.se/',
      subtitle: '',
      remarks: ['Worked with Java, creating a webapplication for bookings']
    },
    {
      at: 'Student Consulting',
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
      subtitle: ''
    },
    {
      at: 'Fastighets AB Brostaden',
      from: '2006',
      to: '2007',
      url: 'http://www.brostaden.se/',
      title: 'Landlord',
      subtitle: 'Summer Internship',
      remarks: ['Summer job working with customers', 'Cleaning, painting etc']
    }
  ],
  education: [
    {
      at: 'Royal Institute of Technology',
      url: 'www.kth.se',
      from: '2009',
      title: 'Computer Science',
      subtitle: 'Msc',
      remarks: ['Machine Learning']
    }
  ],
  commissions: [
    {
      at: 'THS',
      url: 'http://ths.kth.se/',
      from: '2013',
      to: '2013',
      title: 'Event Coordinator',
      subtitle: 'Centralamottagningsgrupp',
      remarks: ['Organize events for new students at KTH']
    },
    {
      at: 'SSCO',
      url: 'http://www.ssco.se/en',
      from: '2013',
      to: '2013',
      title: 'Event Coordinator',
      subtitle: 'Valborgsfamiljen',
      remarks: ['Organize a pub crawl for around 1000 students in Stockholm']
    },
    {
      at: 'Datasektionens Studieresa (Studs)',
      url: 'http://studieresan.se/',
      from: '2013',
      to: '2013',
      title: 'Salesteam manager',
      subtitle: '',
      remarks: ['Responsible for all sales', 'Managed the team']
    },
    {
      at: 'Datasektionens Klubbmästeri, DKM',
      url: 'http://dkm.io/',
      from: '2009',
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
      title: '',
      subtitle: '',
      remarks: ['Reception of new students at KTH', 'Make them feel at home'],
    },
    {
      at: 'Quarnevalen',
      from: '2014',
      to: '2014',
      title: 'Tältchef',
      subtitle: '',
      remarks: ['Organzie a huge event for students in Stockholm', 'Parade through town']
    },
    {
      at: 'THS',
      url: 'http://www.armada.nu/',
      from: '2010',
      to: '2011',
      title: 'Armada',
      subtitle: 'Företagsvärd',
      remarks: ['A fare for students to find jobs', 'Helped Skype and Epsilon during the days.', 'Active for 2 years']
    },
    {
      at: 'Datasektionen',
      title: 'D-Dagen',
      subtitle: 'Företagsvärd and directorate',
      url: 'http://datasektionen.se/naringsliv/d-dagen',
      from: '2009',
      to: '2013',
      remarks: ['Work fare for students interested in ComputerScience.', 'Helped organize it for 4 years']
    }
  ],
  other: [
    {
      at: 'Försvarsmakten',
      from: '2006',
      to: '2007',
      title: 'Stridsfordonsplutonbefäl',
      subtitle: 'Värnplikt',
      url: 'http://www.forsvarsmakten.se/',
      remarks: ['Military Service in Sweden', 'Leader of a pluton of around 60 people.']

    }
  ]
};

const details = {
  name: "Simon Ström",
  email: "simon.strom@gmail.com",
  phone: "+46 (0) 739 59 09 87",
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

React.render(
  <CV experiences={experiences} details={details} />,
    document.getElementById('app')
);

