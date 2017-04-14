var msnry = new Masonry( '.grid', {
  itemSelector: '.grid-item',
  gutter: '.gutter-sizer',
  columnWidth: '.grid-sizer',
  percentPosition: true,
  stagger: 10
});

var msnry2 = new Masonry( '.grid2', {
  itemSelector: '.grid-item2',
  gutter: '.gutter-sizer2',
  columnWidth: '.grid-sizer2',
  percentPosition: true,
  stagger: 10
});

$(window).scroll(function(){
	$(".topfade").css("opacity", 1 - $(window).scrollTop() / 500);
  });


$(function() {
  if ($(window).width() <= 599) {
	$("video").attr("src", "media/cub.webm")
	$("video").attr("poster", "");
  }
  else {
	$("video").attr("src", "media/test.webm");
	$("video").attr("poster", "");

  }
});

$( window ).resize(function() {
  if ($(window).width() <= 599) {
	$("video").attr("src", "media/cub.webm")
	$("video").attr("poster", "");
  }
  else {
	$("video").attr("src", "media/test.webm");
	$("video").attr("poster", "");
  }
});


var videos = document.getElementsByTagName("video"),
fraction = 0.7;
function checkScroll() {

	for(var i = 0; i < videos.length; i++) {

		var video = videos[i];

		var x = video.offsetLeft, y = video.offsetTop, w = video.offsetWidth, h = video.offsetHeight, r = x + w, //right
			b = y + h, //bottom
			visibleX, visibleY, visible;

			visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
			visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));

			visible = visibleX * visibleY / (w * h);

			if (visible > fraction) {
				video.play();
			} else {
				video.pause();
			}

	}

}

window.addEventListener('scroll', checkScroll, false);
window.addEventListener('resize', checkScroll, false);



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

