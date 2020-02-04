/**
 * Scroll bottom function
 */
const scrollBottom = function() {
  if ($('#messages').length > 0) {
    $('#messages').scrollTop($('#messages')[0].scrollHeight);
  }
};

/**
 * Submit message button
 */
const submitButton = function() {
  $('#message_body').on('keydown', function(e) {
    if (e.keyCode === 13) {
      $('button').click();
      e.target.value = "";
    }
  });
};

$(document).on('turbolinks:load', function () {
  // Dropdown menu
  $('.ui.dropdown').dropdown();

  // Closing message alerts
  $('.message .close').on('click', function() {
    $(this).closest('.message').transition('fade');
  });

  // Scroll bottom function
  scrollBottom();

  submitButton();
});
