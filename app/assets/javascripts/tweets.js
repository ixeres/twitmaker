// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(function() {
  // 1. Listen for the submit event on the form
  $('#create-tweet').on('submit', function(e) {
    // 2. Prevent the default behaviour
    e.preventDefault();

    // 3. Submit the AJAX request to the server
    $.ajax({
      method: $(this).attr('method'),
      url: $(this).attr('action'),
      // THIS. Targets the... Overarching action that triggers the event to run. I think. That's my understanding so far.
      data: $(this).serialize(),
      // Using the 'serialize' method to put data in proper format to POST to form.
      dataType: 'json'
    }).done(function(data) {
      $('.tweets').first().prepend(data);
      // Selects the entirety of entered tweets, then targets the first, and prepends (adds preceding) the data that AJAX is querying.
      // At least, that's my understanding.

      // On success (COPY/PASTE FROM TODAY'S ASSIGNMENT. I'M A FRAUD... Or just lazy. So... AN EXCELLENT PROGRAMMER.)
      console.log('submit was successful');
      console.log(data);

    }).fail(function() {
      // On failure
      console.log('submit was NOT successful');
    }).always(function() {
      console.log('You did a thing!');
      // No matter what
    });
  });
});
