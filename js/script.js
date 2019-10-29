$("#rock").hide();
$("#paper").hide();
$("#scissors").hide();
$("#rockC").hide();
$("#paperC").hide();
$("#scissorsC").hide();
$("h4").hide();

$(".rock").click(function() {
    $("#rock").show();
    $("#paper").hide();
    $("#scissors").hide();
    $("h4").show();
    Computer();
});
$(".paper").click(function() {
    $("#paper").show();
    $("#rock").hide();
    $("#scissors").hide();
    $("h4").show();
    Computer();
});
$(".scissors").click(function() {
    $("#scissors").show();
    $("#rock").hide();
    $("#paper").hide();
    $("h4").show();
    Computer();
});

function Computer() {
    var chance = Math.random();
    if (chance < 0.33) {
        $("#rockC").show();
        $("#paperC").hide();
        $("#scissorsC").hide();
    } else if (chance < 0.67) {
        $("#rockC").hide();
        $("#paperC").show();
        $("#scissorsC").hide();
    } else {
        $("#rockC").hide();
        $("#paperC").hide();
        $("#scissorsC").show();
    }
}

