var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbxFU5q7p7Y6DbJI8bJ1a5w_oEAQUYZ4jrfL2VuhPWPKFr6iVM4/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})