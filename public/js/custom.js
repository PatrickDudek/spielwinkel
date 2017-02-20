'use strict';

window.onload = loginDropdown();

function loginDropdown(){
  
  $('#loginBtn').click(function(){
  
    if( $('.login-area').hasClass('hidden')) {

      $('.login-area').removeClass('hidden');

    } else {
       $('.login-area').addClass('hidden');
    }
  
  });
  
}