$(document).ready(function(){

  $('.menu-btn').click(function(){    
      $('.menu').slideToggle(700); 
      if ($(this).hasClass('not-active')) {
        $(this).addClass('is-active').removeClass('not-active');
      }else{
        setTimeout(function(){
          $('.is-active').addClass('not-active').removeClass('is-active')
        },600)      
      }   
    });

  $('.slider').slick({
  arrows: false,
  dots: false,
  fade: true,
  infinite: true,
  speed: 500,
  autoplay: true
});

});