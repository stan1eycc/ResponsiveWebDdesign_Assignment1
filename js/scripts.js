$(document).ready(function () {
  $('[data-toggle="offcanvas"]').click(function () {
    $('.row-offcanvas').toggleClass('active')
  });
});

$('.checkbox1').click(function() {
  if ($(this).is(':checked')) {
    k = ((((this.parentNode).parentNode).parentNode).parentNode)
    console.log($(k).attr("class"))
    $(k).attr('class','panel panel-success')
  }
  if (!$(this).is(':checked')) {
    k = ((((this.parentNode).parentNode).parentNode).parentNode)
    console.log($(k).attr("class"))
    $(k).attr('class','panel panel-primary')
  }
});
