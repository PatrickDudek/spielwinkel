'use strict';

import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Router.route('/', function () {
  this.render('home');
});



Router.route('/user', function () {
  if(Meteor.user()) {
    this.render('userprofile');
  } else {
    this.redirect('/home');
  }
  this.render('userprofile');
});

Router.route('/add-team', function () {
  this.render('clubprofile');
});

Router.route('/club-choose', function () {
  this.render('chooseclub');
});

Router.route('/club-create', function () {
  this.render('createclub');
});


Template.navbar.helpers({  
  template_signup: 'login'
});

Template.registerHelper('logout', function() {
  var logout = '<a href="#" id="logout" class="btn btn-login btn-small">Logout</a>';
  return logout;
});

Template.logoutButton.events({
    'click #logout': function(event) {
      Meteor.logout([Router.go('/')]);
    }
});

