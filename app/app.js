'use strict';

angular
  .module('gmaingular', [
    'ngResource',
    'ngSanitize',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('main', {
        url: '/',
        views: {
          'header' : {
            templateUrl: 'modules/header/header.html',
            controller: 'HeaderCtrl'
          },
          'mailbox' : {
            templateUrl: 'modules/mailbox/mailbox.html',
            controller: 'MailboxCtrl'
          },
          'navigation' : {
            templateUrl: 'modules/navigation/nav.html',
            controller: 'NavCtrl'
          },
          'chat' : {
            templateUrl: 'modules/chat/chat.html',
            controller: 'ChatCtrl'
          }
        }
      });
  });
