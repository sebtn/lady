// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets
//= require jquery_ujs
//= require_tree .
//= require jquery-ui
//= require bootstrap-sprockets

// $(window).load(function() {       
// 	var theWindow = $(window),
// 	    $bg = $("#bg"),
// 	    aspectRatio = $bg.width() / $bg.height();    			    		
// 	function resizeBg() {		
// 		if ((theWindow.width() / theWindow.height()) < aspectRatio ) {
// 		    $bg
// 		    	.removeClass()
// 		    	.addClass('bgheight');
// 		} else {
// 		    $bg
// 		    	.removeClass()
// 		    	.addClass('bgwidth');
// 		}				
// 	}                   			
// 	theWindow.resize(resizeBg).trigger("resize");
