$("#rock").hide();
$("#paper").hide();
$("#scissors").hide();
$("#rockC").hide();
$("#paperC").hide();
$("#scissorsC").hide();
$("h4").hide();

function Rock() {
    $("#rock").show();
    $("#paper").hide();
    $("#scissors").hide();
    $("h4").show();
    return "rockU";
}

function Paper() {
    $("#paper").show();
    $("#rock").hide();
    $("#scissors").hide();
    $("h4").show();
    return "paperU";
}
function Scissors() {
    $("#scissors").show();
    $("#rock").hide();
    $("#paper").hide();
    $("h4").show();
    return "scissorsU";
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

function Winner {
    if (answerUr === "rockU" && answerCr === "rockC" || answerUp === "paperU" && answerCp === "paperC" || answerUs === "scissorsU" && answerCs === "scissorsC") {
        alert();
    }
}

$(".rock").click(function() {
    Rock();
    Computer();
    var answerUr = Rock();
    console.log(answerUr);
    var answerCr = Computer();
    console.log(answerCr);
});
$(".paper").click(function() {
    Paper();
    Computer();
    var answerUp = Paper();
    console.log(answerUp);
    var answerCp = Computer();
    console.log(answerCp);
});
$(".scissors").click(function() {
    Scissors();
    Computer();
    var answerUs = Scissors();
    console.log(answerUs);
    var answerCs = Computer();
    console.log(answerCs);
});

