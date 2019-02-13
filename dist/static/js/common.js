$(function(){
	//var site_title = "WoodenFolk"
	//$(function(){ $('[data-division="' + division + '"]').addClass('selected') });

	function AddMode(a){
		if ($(document).scrollTop() > a) {
			$('body').addClass('js-fixed-menu');
			$('#top').addClass('js-fix');
		} else {
			$('body').removeClass('js-fixed-menu');
			$('#top').removeClass('js-fix');
		}
	}
	AddMode(100);

	/* Top button */
	function TopBtnAfix(b, c){
		if ( ($(window).height() + b) < $(document).height() ) {
				$('#toTop').removeClass('hidden').affix({
					offset: {top:c}
			});
		}
	}

	function scrollTrans_landscape(){
		const windowWidth = $( window ).width();
		$(window).scroll(function() {
		if(windowWidth > 736 ) {
			AddMode(100);
			TopBtnAfix(150, 200);
		} else if (windowWidth <= 736 & windowWidth > 667) {
			AddMode(350);
			TopBtnAfix(90, 90);
		} else if (windowWidth <= 667 & windowWidth > 568) {
			AddMode(290);
			TopBtnAfix(90, 90);
		} else if (windowWidth <= 568 & windowWidth >= 320 ) {
			AddMode(250);
			TopBtnAfix(90, 90);
		}
		});
	}

	function scrollTrans(){
		const windowWidth = $( window ).width();
		$(window).scroll(function() {
		if(windowWidth > 1024 ) {
			AddMode(680);
			TopBtnAfix(150, 200);
		} else if (windowWidth <= 1024 & windowWidth > 580) {
			AddMode(650);
			TopBtnAfix(90, 90);
		} else if (windowWidth <= 580 & windowWidth >= 320 ) {
			AddMode(450);
			TopBtnAfix(90, 90);
		}
		});
	}

	const windowWidth = $( window ).width();
	const windowHeight = $( window ).height();
	if(windowWidth > windowHeight ) {
		scrollTrans_landscape();
	} else if(windowWidth < windowHeight ) {
		scrollTrans();
	}

	$.fn.center = function(parent) {
		if (parent) {
			parent = this.parent();
		} else {
			parent = window;
		}
		this.css({
			"position":"absolute",
			"top": ((($(parent).height() - this.outerHeight()) / 2) + $(parent).scrollTop() + "px"),
			"left": ((($(parent).width() - this.outerWidth()) / 2) + $(parent).scrollLeft() + "px")
		});
		return this;
	}

	$("#gnb a").on('click',function(e) {
		var url = e.target.href;
		var hash = url.substring(url.indexOf("#")+1);
		$('html, body').animate({
			scrollTop: $('#'+hash).offset().top
		}, 500);
		return false;
	});

	const $mobile_menu_ico  = $("<div></div><div></div><div></div>");
	$mobile_menu_ico.appendTo(".resp-ico-menu");
	const $mobile_menu_bg  = $("<div class='mobile-menu-bg'></div>");
	$mobile_menu_bg.appendTo("#menu");
	
	$('.resp-ico-menu, .mobile-menu-bg').click(function(){
		$('.resp-ico-menu').toggleClass("resp-ico-menu-on");
		$('.menu-list').toggleClass("view-n-hide");
		$('.mobile-menu-bg').toggleClass("view-n-hide-bg");
		$("body").toggleClass("mask-on");
	});

	/* Tablet Menu */
	const $child_hit_area = $("<div class='btn-view-child'></div>");
	$child_hit_area.appendTo('.hav-child');
	$('.btn-view-child').click(function(){
		$except = $(this).prev();
		$except_P = $(this).parent().find("> a");
		$('.hav-child').find("ul").not($except).slideUp();
		$('.hav-child').find("a").not($except_P).removeClass("trans-arrow");
		$(this).prev().slideToggle();
		$(this).parent().find("> a").toggleClass("trans-arrow");
		return false;
	});

	function RemoveOpenMenu(){
		$('.hav-child ul, .menu-list').removeAttr("style");
		$('.hav-child').find("a").removeClass("trans-arrow");
		$('.menu-list').removeClass("view-n-hide");
		$('.resp-ico-menu').removeClass("resp-ico-menu-on");
		$("body").removeClass("mask-on");
		$('.mobile-menu-bg').removeClass("view-n-hide-bg");
	}

	/* Sub menu child click  for mobile */
	$(".child-nav-btn").click(function(){
		RemoveOpenMenu();
	});

	/* Mobile menu button action */
	$('.mobile-btn-login, .ft-btn-login').click(function(){
		RemoveOpenMenu();
		OpenLoginBox();
		return false;
	});

	$( window ).resize(function() {
		const windowWidth = $( window ).width();
		
		if(windowWidth > 1140 ) {
			RemoveOpenMenu();
		} else if (windowWidth > 581) 
		{
			//$( ".tg-name" ).hoverIntent(makeTall,makeShort);
		} else if (windowWidth < 580){
			//$( ".tg-name" ).hoverIntent("","");
		}

		if(windowWidth > windowHeight ) {
			scrollTrans_landscape();
		} else {
			scrollTrans();
		}
		getContentGap();
	});

	$('#toTop').on('click', function(){
		$('html,body').animate({scrollTop:0},'slow');
		return false;
	});

});

 $(document).keydown(function(e) {
	e.stopPropagation();
	if (e.keyCode === 36) {
		$('html,body').animate({scrollTop:0},'slow');
	} else if (e.keyCode === 35) {
		$('html,body').animate({ scrollTop: $(document).height()-$(window).height() },'slow');
	}
});