'use strict';

angular.module('gmaingular')
  .controller('MailboxCtrl', ['$scope', 'AllMailService', function ($scope, AllMailService) {
    $scope.allMail = AllMailService.emails;
  }])


  .directive('email', function(){
    return {
      //this can either be an element or an attribute
      restrict: 'EA',
      //since we're going to use this as an element, replace
      //true will replace the customer html tag with the template below
      replace: true,
      templateUrl: 'emailDir.html',
      //here is where we define the scope variables (attributes on the html element)
      //scope: true grabs everything from the parent
      //an object literal only grabs the specific ones we want
      scope: {
        read: '=', //= gives us 2 way data binding
        sender: '@', // @ means this will be a string
        subject: '@',
        text: '@',
        open: '&' //& is used for a function
      }
    };
  });