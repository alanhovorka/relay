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
  	$("iframe").attr("src","https://gfycat.com/ifr/TenseFirmGrayling");
  	$("video").css("display", "none");


  }
  else {
	$("video").attr("src", "media/torch_relay_graphic.webm");
  	$("video").css("display", "inline");
  	$("#vidj").css("display","none");
  }
});
/*
$( window ).resize(function() {
  if ($(window).width() <= 599) {
	$("video").attr("src", "media/torch_relay_graphic.webm")
	$("video").attr("poster", "");
  }
  else {
	$("video").attr("src", "media/torch_relay_graphic.webm");
	$("video").attr("poster", "");
  }
});
*/

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




