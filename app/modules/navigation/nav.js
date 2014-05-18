'use strict';

angular.module('gmaingular')
  .controller('NavCtrl', function ($scope) {

  })

  .directive('navList', function(){
    return {
      restrict: 'EA',
      replace: true,
      template: '<li></li>',
      scope: {
        name: '@',
        unread: '&',
        active: '='
      }
    };
  });
