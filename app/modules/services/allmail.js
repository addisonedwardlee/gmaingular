'use strict';

angular.module('gmaingular')
  .service('AllMailService', function(){

    this.emails = [
      {
        sender: 'Shane Keller',
        subject: 'Nanny this!',
        text: 'Hey ya big dummy',
        sendTime: 1400300043216
      },{
        sender: 'Ian Lyons',
        subject: 'What a mess',
        text: 'This is why we cant have nice things',
        sendTime: 1400230043216
      },{
        sender: 'Jon Tewks',
        subject: 'Im not hiding behind the wall',
        text: 'BOO!',
        sendTime: 1380300043216
      },{
        sender: 'Latif LePeu',
        subject: 'Shots!',
        text: 'Stop coding and start drinking already!',
        sendTime: 1230300043216
      }
    ];
  });