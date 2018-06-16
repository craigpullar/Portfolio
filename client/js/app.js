/* Main */
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import slick from 'slick-carousel';
import 'hammerjs';
import 'jquery-inview';
import matchHeight from 'jquery-match-height';
import Page from './containers/Page';
import '../css/main.scss';

$(function(){
    /* Init MatchHeight */
    $('.match').matchHeight();

    /* Init HammerJS */
    const menuSwipe = new Hammer(document.body, {
        inputClass: Hammer.SUPPORT_POINTER_EVENTS ? Hammer.PointerEventInput : Hammer.TouchInput,
    });

    const isMobNavOpen = () => $('.mob-nav').hasClass('open');
    menuSwipe.on('swiperight', (e) => {
        !isMobNavOpen() && $('.mob-nav-btn').click();
    });
    menuSwipe.on('swipeleft', (e) => {
        isMobNavOpen() && $('.mob-nav-btn').click();
    });


    /* Init Animations */
    const isMobileUserAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    if (!isMobileUserAgent) {
        $('*[data-animation]').each(function () {
            $(this).css('opacity', 0);
            
            $(this).on('inview', function (event, isInView) {
                if (isInView) {
                    $(this).delay($(this).attr('data-animation-delay')).queue(function (next) {
                        $(this).addClass(`animated ${$(this).attr('data-animation')}`);
                        next();
                    });
                }
            });
        });
    } else {
    /* Init Slick */
        $('.slick').slick({
            dots: true,
            infinite: true,
            speed: 500,
            cssEase: 'linear',
            mobileFirst: true,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 700,
                    settings: 'unslick',
                },
            ],
        });
    }
});


ReactDOM.render(<Page />, document.getElementById('app'));