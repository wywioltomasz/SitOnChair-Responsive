document.addEventListener('DOMContentLoaded', function () {
  $('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
  });
});
