function scrollFunc(sElem){
	
	$(".b-upButton").hide(); //hide scroll top button
	
	
	var  menuBtn = 	$(".b-header__menuBtn")	//menuBtn and 
		,menu = 	$(".b-header__menu")	//	menu obj for dropdown menu
		;
		
	//jq menu appearing-dissappearing functions
	var menuAppearing = function(){
			menuBtn.fadeOut(200, function (){
				menuBtn.delay(100).children("span").removeClass("fa-bars").addClass("fa-times");
				menuBtn.fadeIn(200);
			});
			
			menu.animate({
				left: "0px", 
				opacity: "1"
			}, 400);
		}
	var menuDissapearing = function(){
			menu.animate({
				left: "-130px", 
				opacity: "0"
			}, 400);
			menuBtn.fadeOut(200, function (){
				$(this).delay(100).children("span").removeClass("fa-times").addClass("fa-bars");
				$(this).fadeIn(200);
			});
		}
	//--------------------------------------------
		
	var  elem = $(sElem)				//enclosure b-enroll block with overflow: hidden
		,hiddenElems = $(".hidden");	//hidden callback form block
	
	$(window).on("scroll load resize", function(){
		//callback form appearing
		var  scrollTopPosition = $(window).scrollTop()
			,windowHeight = $(window).height()
			,documentHeight = $(document).height()
			,elemOffset = elem.offset().top
			,elemHeight = elem.outerHeight()
			;
		
		if (scrollTopPosition + 550 > elemOffset || windowHeight + scrollTopPosition == documentHeight || elemOffset + elemHeight < windowHeight){
			elem.css("overflow", "visible");
			hiddenElems.removeClass("hidden");
		} 
		
		// scroll top button appearance		
		if (scrollTopPosition > elemOffset + elemHeight){
			$(".b-upButton").fadeIn(300);
		} else {
			$(".b-upButton").fadeOut(300);
		}
	});
	
	//jq menu appearing-dissappearing
	$(window).on("load resize", function(){
		//b-menu__item right arrow changing and binding/unbinding menu event functions
		if ($(window).width() < 832){
			$(".b-menu__link > span").removeClass("fa-angle-down").addClass("fa-angle-right");
			menuBtn.click(function(){
				if (menuBtn.children("span").hasClass("fa-bars")) {
					menuAppearing();
				}else {
					menuDissapearing();
				}
			});	
			menu.mouseleave(menuDissapearing);
		} else {
			$(".b-menu__link > span").addClass("fa-angle-down");
			menu.css("opacity", "1");
			menu.unbind("mouseleave");
			menuBtn.unbind("click");
		}
		
	});
	
	//scrolling by scrollUp button
	$(".b-upButton a").click(function(){
			$("html, body").animate({
				scrollTop: 0
			}, 800);
			//return false;
		});	
}


function main(){
	scrollFunc(".b-enrol");
}

$(document).ready(main);