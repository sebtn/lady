// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//= require jquery
//= require bootstrap-sprockets
//= require jquery_ujs
//= require_tree .
//= require jquery-ui
//= require bootstrap-sprockets

$(document).ready(function() {
    var playing = false;

    $('button#btn1').click(function() {
        $(this).toggleClass('glyphicon glyphicon-play glyphicon glyphicon-pause');
        
        if (playing == false) {
            document.getElementById('myTune').play();
            playing = true;

        } else {

            document.getElementById('myTune').pause();
            playing = false;  
                     
        }
    });
});