/* Main */
import Page from './Page';
import slick from 'slick-carousel';
import 'jquery-inview';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import matchHeight from 'jquery-match-height';
import "../css/main.scss";
import "hammerjs";

$(function(){

	/* Init MatchHeight*/
	$('.match').matchHeight();

	/* Init HammerJS */
	let menu_swipe = new Hammer(document.body, {
		inputClass: Hammer.SUPPORT_POINTER_EVENTS ? Hammer.PointerEventInput : Hammer.TouchInput
	});
	menu_swipe.on('swiperight', (e) => {
		if(!$('.mob-nav').hasClass('open'))
			$('.mob-nav-btn').click();
	});
	menu_swipe.on('swipeleft', (e) => {
		if($('.mob-nav').hasClass('open'))
			$('.mob-nav-btn').click();
	});

	/* Init Slick */
	$('.slick').slick({
		dots: true,
		infinite: true,
		speed: 500,
		cssEase: 'linear',
		mobileFirst : true,
		responsive: [
		{
			breakpoint: 700,
			settings: "unslick"
		}
		]
	});

	/* Fix slick on resize */
	$(window).resize(function() {
		$('.slick').slick('resize');
	});

	/* Init Animations */
	if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		$('*[data-animation]').each(function(){
			$(this).css('opacity', 0);
			$(this).on('inview', function(event, isInView) {
				if (isInView) {
					$(this).delay($(this).attr('data-animation-delay')).queue(function(next){
						$(this).addClass('animated ' + $(this).attr('data-animation'));
						next();
					});
				}
			});
		});

	}
	

});


ReactDOM.render(<Page />, document.getElementById('app'));





