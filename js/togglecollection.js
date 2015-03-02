$(document).ready(function(){
	$('.toggle').on('click', function(){
		if(!$(this).hasClass(".activetab")){
			var collection = $(this).data("collection");

			if(collection === "spradlin"){
				$(".bingoclothes").fadeOut(function(){
					$(".bingotoggle").removeClass("activetab");
					$(".spradlintoggle").addClass("activetab");
					$(".spradlin").fadeIn();
				});
			}
			else if(collection === "bingo"){
				$(".spradlin").fadeOut(function(){
					$(".spradlintoggle").removeClass("activetab");
					$(".bingotoggle").addClass("activetab");
					$(".bingoclothes").fadeIn();
				});
			}
		}
	});
});