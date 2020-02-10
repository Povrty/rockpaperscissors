$("#rock").hide();
$("#paper").hide();
$("#scissors").hide();
$("#rockC").hide();
$("#paperC").hide();
$("#scissorsC").hide();
$("h4").hide();


function Move(one, two, three) {
    $("#" + one).show();
    $("#" + two).hide();
    $("#" + three).hide();
    $("h4").show();
    return  one + "U";
}

function Computer() {
    var chance = Math.random();
    if (chance < 0.33) {
        $("#rockC").show();
        $("#paperC").hide();
        $("#scissorsC").hide();
        return "rockC";
    } else if (chance < 0.67) {
        $("#rockC").hide();
        $("#paperC").show();
        $("#scissorsC").hide();
        return "paperC";
    } else {
        $("#rockC").hide();
        $("#paperC").hide();
        $("#scissorsC").show();
        return "scissorsC";
    }
}

function Winner() {
    if ($("#rock").is(":visible") && $("#scissorsC").is(":visible") || $("#paper").is(":visible") && $("#rockC").is(":visible") || $("#scissors").is(":visible") && $("#paperC").is(":visible")) {
        alert("You win!");
    } else if ($("#rock").is(":visible") && $("#rockC").is(":visible") || $("#paper").is(":visible") && $("#paperC").is(":visible") || $("#scissors").is(":visible") && $("#scissorsC").is(":visible")){
        alert("Tie!")
    } else {
        alert("You lose!")
    }
}
$("#clear").click(function(){
    location.reload();
})

$(".rock").click(function() {
    Move("rock","paper","scissors");
    Computer();
    console.log("Rock");
    console.log(Computer());
    Winner();
});
$(".paper").click(function() {
    Move("paper","rock","scissors");
    Computer();
    console.log("Paper");
    console.log(Computer());
    Winner();
});
$(".scissors").click(function() {
    Move("scissors","paper","rock");
    Computer();
    console.log("Scissors");
    console.log(Computer());
    Winner();
});


