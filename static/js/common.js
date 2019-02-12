$(function(){
	//var site_title = "WoodenFolk"
	//$(function(){ $('[data-division="' + division + '"]').addClass('selected') });

	/* gnb Trans */
	function AddMode(a){
		if ($(document).scrollTop() > a) {
			$('#top').addClass('js-fix');
		} else {
			$('#top').removeClass('js-fix');
		}
	}
	AddMode(680);

	/* Top button */
	function TopBtnAfix(b, c){
		if ( ($(window).height() + b) < $(document).height() ) {
				$('#toTop').removeClass('hidden').affix({
					offset: {top:c}
			});
		}
	}

	function scrollTrans_landscape(){
		var windowWidth = $( window ).width();
		var windowHeight = $( window ).height();
		$(window).scroll(function() {
		if(windowWidth > 736 ) {
			AddMode(680);
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
		var windowWidth = $( window ).width();
		var windowHeight = $( window ).height();
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

	var windowWidth = $( window ).width();
	var windowHeight = $( window ).height();
	if(windowWidth > windowHeight ) {
		scrollTrans_landscape();
	} else if(windowWidth < windowHeight ) {
		scrollTrans();
	}

	$( window ).resize(function() {
		var windowWidth = $( window ).width();
		var windowHeight = $( window ).height();
		if(windowWidth > windowHeight ) {
			scrollTrans_landscape();
		} else {
			scrollTrans();
		}
	});

	/*login popup*/
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

	function OpenLoginBox (){
		$(".mask").fadeIn().css({'z-index':'9999'});
		$(".login-wrap").css({'display':'block','opacity':'1'})
		$(".login-box").css({'display':'block', 'opacity':'0',"margin":"20px 0px 0px 0px"}).animate({'opacity':'1',"margin":"0px 0px 0px 0px"}, 300).center(true);
		$("body").addClass("mask-on");
	}
	$(".btn-login").click(function(){
		//off_mobile_menu();
		OpenLoginBox ();
	  });
	  $(".btn-close").click(function(){
		$(".mask").fadeOut();
		$(".login-wrap").animate({'opacity':'0'}, 300, function(){
				$(".login-box, .login-wrap").css({'display':'none'})
		});
		$("body").removeClass("mask-on");
	  });
	$('#search').addClass('search-closed');
	$('.search-ico').click(function(e){
		$(".searcharea").animate({
			width:"toggle"
		});
		$('#search').toggleClass('search-open search-closed');
		setTimeout (function(){
			$('#search.search-open').focus();
		}, 20);
		$('#search.search-closed .site-search__input').blur();
	});

	/* Page Anchor */
	$("#gnb a").on('click',function(e) {
		var url = e.target.href;
	    var hash = url.substring(url.indexOf("#")+1);
	    $('html, body').animate({
			scrollTop: $('#'+hash).offset().top
	    }, 500);
		return false;
	});

	/* Tablet & Mobile menu btn*/
	mobile_menu_ico  = $("<div></div><div></div><div></div>");
	mobile_menu_ico.appendTo(".resp-ico-menu");
	mobile_menu_bg  = $("<div class='mobile-menu-bg'></div>");
	mobile_menu_bg.appendTo("#menu");
	
	$('.resp-ico-menu, .mobile-menu-bg').click(function(){
		$('.resp-ico-menu').toggleClass("resp-ico-menu-on");
		$('.menu-list').toggleClass("view-n-hide");
		$('.mobile-menu-bg').toggleClass("view-n-hide-bg");
		$("body").toggleClass("mask-on");
	});

	function off_mobile_menu() {
			$('.menu-list').slideUp();
			$('.resp-ico-menu').removeClass("resp-ico-menu-on");
	}

	/* Tablet Menu */
	child_hit_area = $("<div class='btn-view-child'></div>");
	child_hit_area.appendTo('.hav-child');
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
		var windowWidth = $( window ).width();
		if(windowWidth > 1140 ) {
			RemoveOpenMenu();
		} else if (windowWidth > 581) 
		{
			//$( ".tg-name" ).hoverIntent(makeTall,makeShort);
		} else if (windowWidth < 580){
			//$( ".tg-name" ).hoverIntent("","");
		}
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