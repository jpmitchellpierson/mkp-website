$(document).ready(function() {
  // Start Flexslider
  $(document).ready(() => {
    $('.flexslider').flexslider();
  });

  // Create About Us Options
  let aboutMichael = document.createElement('button');
  aboutMichael.className = 'option';
  aboutMichael.id = 'aboutMichael';
  aboutMichael.innerText = 'Michael Pierson'

  let michaelServices = document.createElement('button');
  michaelServices.className = 'option';
  michaelServices.id = 'michaelServices'
  michaelServices.innerText = 'Our Services';

  // Hide About Us Options
  $('.about').append(aboutMichael);
  $('.about').append(michaelServices);
  $('#aboutMichael').hide();
  $('#michaelServices').hide();

  // Toggle About Us Options When Clicked
  $('#about').on('click',() => {
    $('#aboutMichael').toggle();
    $('#michaelServices').toggle();
  });
});

