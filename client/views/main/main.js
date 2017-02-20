'use strict';

import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Router.route('/', function () {
  this.render('home');
});

Router.route('/home', function () {
  this.render('home');
});

Router.route('/user', function () {
  this.render('userprofile');
});

Router.route('/club', function () {
  this.render('clubprofile');
});

Template.navbar.helpers({  
  template_signup: 'login'
});

Template.registerHelper('logout', function() {
  var logout = '<a href="javascript:void(0)" id="logout" class="btn btn-login btn-small">Logout</a>';
  return logout;
});

Template.logoutButton.events({
    'click #logout': function(event) {
      Meteor.logout([Router.go('/')]);
    }
});

