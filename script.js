//<![CDATA[
$(window).on('load', function (){
  $('#preloader .inner').fadeOut();
  $('#preloader').delay(350).fadeOut('slow');
  $('body').delay(350).css({'overflow':'visible'});
})
//]]>




document.querySelector(".hamburguer").addEventListener("click", () => 
    document.querySelector(".container").classList.toggle("show-menu")
);

$('.banner a, nav a').click(function(e){
  e.preventDefault();
  var id = $(this).attr('href'),
      targetOffset = $(id).offset().top;
  $('html, body').animate({
    scrollTop: targetOffset
  },500);
});



