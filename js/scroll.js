$(function(){
	$(".scroll-top").click(function() {
  		$("html, body").animate({ scrollTop: 0 }, "slow");
  		return true;
	});
	var viewportWidth = $(window).width();
    if (viewportWidth < 990) {
            $(".tablist-button").removeClass("collapse").addClass("collapsed");
            $("#workshops-tablist").addClass("collapse").css("height","0px");
    }
});

$(window).resize(function () {
    var viewportWidth = $(window).width();
    if (viewportWidth > 990) {
            $("#workshops-tablist").removeClass("collapse in");
    }
    if (viewportWidth < 990) {
            $(".tablist-button").removeClass("collapse").addClass("collapsed");
            $("#workshops-tablist").addClass("collapse").css("height","0px");
    }
});
