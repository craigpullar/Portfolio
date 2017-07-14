/* Main */
import * as globals from "./globals";
import Page from './Page';
import slick from 'slick-carousel';
import 'jquery-inview';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import matchHeight from 'jquery-match-height';
import "../css/main.scss";

$(function(){

	/* Init MatchHeight*/
	$('.match').matchHeight();

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





