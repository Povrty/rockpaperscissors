// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
$("#rock").hide();
$("#paper").hide();
$("#scissors").hide();
$(".cal").hide();

$(".rock").click(function() {
    $("#rock").show();
    $("#paper").hide();
    $("#scissors").hide();
    $(".cal").show();
    $(".cal").delay(5000).hide();
});
$(".paper").click(function() {
    $("#paper").show();
    $("#rock").hide();
    $("#scissors").hide();
    $(".cal").show();
    $(".cal").delay(5000).hide();
});
$(".scissors").click(function() {
    $("#scissors").show();
    $("#rock").hide();
    $("#paper").hide();
    $(".cal").fadeIn(2500);
    $(".cal").delay(2500).fadeOut();
});

var chance = Math.random();

// DOCUMENT READY FUNCTION BELOW

