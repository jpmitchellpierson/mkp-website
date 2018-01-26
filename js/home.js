$(document).ready(function() {
  // Start Flexslider
  $(document).ready(() => {
    $('.flexslider').flexslider({
      slideshowSpeed: 6000
    });
  });

  // Create About Us Options
  let aboutMichael = document.createElement('button');
  aboutMichael.className = 'option';
  aboutMichael.id = 'aboutMichaelBtn';
  aboutMichael.innerText = 'Michael Pierson'

  let michaelServices = document.createElement('button');
  michaelServices.className = 'option';
  michaelServices.id = 'michaelServicesBtn'
  michaelServices.innerText = 'Our Services';

  // Hide About Us Options
  $('.about').append(aboutMichael);
  $('.about').append(michaelServices);
  $('.option').hide();

  // Toggle About Us Options When Clicked
  $('#about').on('click',() => {
    $('.option').toggle();
  });

  $('#aboutMichaelBtn').click(() => {
    $('html, body').animate({
      scrollTop: $(".slide-four").offset().top
    }, 1000);
    $('.option').toggle();
  });

  $('#michaelServicesBtn').click(() => {
    $('html, body').animate({
      scrollTop: $(".slide-two").offset().top
    }, 1000);
    $('.option').toggle();
  });
});

