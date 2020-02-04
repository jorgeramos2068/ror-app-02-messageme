$(document).on('turbolinks:load', function () {
  // Dropdown menu
  $('.ui.dropdown').dropdown();

  // Closing message alerts
  $('.message .close').on('click', function() {
    $(this).closest('.message').transition('fade');
  });

  // Scroll bottom function

});
