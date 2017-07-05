/* Main */
import * as globals from "./globals";
import * as components from "./components";
import Page from './Page';
import slick from 'slick-carousel';



import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import matchHeight from 'jquery-match-height';

$(function(){
	$('.match').matchHeight();

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

	$(window).resize(function() {
		$('.slick').slick('resize');
	});


});


ReactDOM.render(<Page />, document.getElementById('app'));





