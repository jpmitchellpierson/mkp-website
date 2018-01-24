// Flexslider jQuery
$(document).ready(function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });

  let aboutMichael = document.createElement('button');
  aboutMichael.className = 'option';
  aboutMichael.id = 'aboutMichael';
  aboutMichael.innerText = 'Michael Pierson'

  let michaelServices = document.createElement('button');
  michaelServices.className = 'option';
  michaelServices.id = 'michaelServices'
  michaelServices.innerText = 'Our Services';

  $('.about').append(aboutMichael);
  $('.about').append(michaelServices);
  $('#aboutMichael').hide();
  $('#michaelServices').hide();

  $('#about').on('click',() => {
    $('#aboutMichael').toggle();
    $('#michaelServices').toggle();
  });
});

