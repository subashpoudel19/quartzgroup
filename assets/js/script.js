// scrollTop
$(window).scroll(function() {
  if ($(this).scrollTop()>200)
    { $("#s_top").fadeIn(); }
  else
    { $("#s_top").fadeOut(); }
});

$("#s_top").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});
// End for scrollTop
// For navigation
$("#navigation ul.ul-nav li a").on('click', function(e) {

  if($('#my-subhead').hasClass('sticky')){
    $('html, body').animate({
      scrollTop: $(this.hash).offset().top-70
    }, 1000);
  }else{
    $('html, body').animate({
      scrollTop: $(this.hash).offset().top-120
    }, 1000);
  }

});


$(document).ready(function(){
  $('.all-act a').css('color','#009EE2');
  $(".filter-button").click(function(){
    var value = $(this).attr('data-filter');

    $('.all-act a').css('color','grey');
    $(this).siblings().children('a').css('color','grey');
    $('#'+value+' a').css('color','#009EE2');

    if(value == "all")
      { $('.filter').show('slow'); }
    else
    { 
      $('.filter').not('.'+value).hide('slow');
      $('.filter').filter('.'+value).show('slow');
    }
  });
}); 

function fixed_head_foot(){
  var w_hgt         = $(window).height();
  var head          = $('.header').height();
  var foot          = $('.footer').height();
  var content_hgt   = w_hgt - (head+foot);
  $('#content').css('min-height',content_hgt+'px');
}

$(document).ready(function(){

  fixed_head_foot();
  $('.collapse').on('shown.bs.collapse', function(){
    $(this).parent().find(".glyphicon-menu-down").removeClass("glyphicon-menu-down").addClass("glyphicon-menu-up");
  }).on('hidden.bs.collapse', function(){
    $(this).parent().find(".glyphicon-menu-up").removeClass("glyphicon-menu-up").addClass("glyphicon-menu-down");
  });

});

$(window).resize(function(){
  fixed_head_foot();
});