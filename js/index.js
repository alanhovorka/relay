// external js: masonry.pkgd.js

var msnry = new Masonry( '.grid', {
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true,
  stagger: 10
});

$(window).scroll(function(){
    $(".topfade").css("opacity", 1 - $(window).scrollTop() / 500);
  });
$(function() {
    $(window).scroll( function(){
    
       
        $('.fadein').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* Adjust the "200" to either have a delay or that the content starts fading a bit before you reach it  */
            bottom_of_window = bottom_of_window + 500;  
          
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},500);
                    
            }
        }); 
    
    });
});

