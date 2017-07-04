/* Main */
import * as globals from "./globals";
import * as components from "./components";
import Page from './Page';



import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import matchHeight from 'jquery-match-height';

$(function(){
	$('.match').matchHeight();
});


ReactDOM.render(<Page />, document.getElementById('app'));





