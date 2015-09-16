// import React from 'react';
var React = require('react');
import CV from './components/Cv.jsx';

const experiences = {
  work: [
    {
      from: 'Dec 2014',
      to: 'Sept 2015',
      title: 'Software Developer',
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
      from: '2012',
      to: '2013',
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
      subtitle: '',
      remarks: ['Worked with Java, creating a webapplication for bookings']
    },
    {
      at: 'StudentConsulting',
      from: '2007',
      to: '2008',
      title: 'Reception duty',
      remarks: ['Reception', 'Handyman'],
      subtitle: ''
    },
    {
      at: 'Procter & Gamble',
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
      title: 'Landlord',
      subtitle: 'Summer Internship',
      remarks: ['Summer job working with customers', 'Cleaning, painting etc']
    }
  ],
  education: [
    {
      at: 'Royal Institute of Technology',
      from: '2009',
      title: 'Computer Science',
      subtitle: 'Msc',
      remarks: ['Machine Learning']
    }
  ],
  commissions: [
    {
      at: 'THS Centralamottagningsgrupp',
      from: '2013',
      to: '2013',
      title: 'Event Coordinator',
      subtitle: '',
      remarks: ['Organize events for new students at KTH']
    },
    {
      at: 'Valborgsfamiljen',
      from: '2013',
      to: '2013',
      title: 'Event Coordinator',
      subtitle: '',
      remarks: ['Organize a pub crawl for around 1000 students in Stockholm']
    },
    {
      at: 'Datasektionens Studieresa (Studs)',
      from: '2013',
      to: '2013',
      title: 'Salesteam manager',
      subtitle: '',
      remarks: ['Responsible for all sales', 'Managed the team']
    },
    {
      at: '',
      from: '',
      to: '',
      title: '',
      subtitle: '',
      remarks: ['sdds'],
      hide: true
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

