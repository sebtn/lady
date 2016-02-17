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
//= require jquery_ujs


//= require_tree .

//= require jquery-ui

$(function(){
    $('ul').data('type','large');
});

$(window).scroll(function(){
    var $nav = $('ul'), time = 600;
    if ($('body').scrollTop() > 0) {
        if ($nav.data('type') == 'large') {
            $nav.data('type','tiny').stop().animate({ height:'0px' }, time);
        }
    } else {
        if ($nav.data('type') == 'tiny') {
            $nav.data('type','large').stop().animate({ height:'100px' }, time);
        }  
    }
});