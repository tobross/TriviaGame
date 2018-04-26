var newGame = $(document).ready(function() {
//Create array of pages.
var pages = [".question1", ".question2", ".question3", ".question4", ".question5", ".question5", ".question6", ".question7", ".question8", ".question9", ".question10"];
for (i = 0; i < pages.length; i++) {}
var correct = 0;
var incorrect = 0;
var round = 1;
var timer;
var counter;
var second;
//Display opening page with title, instructions, and start button.

//after start button is pressed, hide start page and display first question, image for question, answers with selectable buttons, and timer.
var game =$(document).on("click", ".start", function() {
    $(".titlePage").addClass("hide");
    $(".question1").removeClass("hide");
    $(".counter").removeClass("hide");
    clearInterval(trackTime);
    clearInterval(quizTime);
    trackTime();
    counter = 20
    timer = setInterval(quizTime, 20000);
});
function trackTime() {
    clearInterval(trackTime)
    clearInterval(quizTime);
    $("#counter").text(counter);
    counter--;
};
second = setInterval(trackTime, 1000);

function quizTime() {
    $(".counter").removeClass("hide");
    counter = 20;
    clearInterval(timer);
    clearInterval(second);
    timer = setInterval(quizTime, 20000);
    second = setInterval(trackTime, 1000);
    $(".question" + round).addClass("hide");
    round++;
    $(".question" + round).removeClass("hide");
    incorrect++;
    console.log(incorrect);
    if (round === 11) {
        clearInterval(timer);
        clearInterval(second);

    };
};
//if a selection is not made by the end of timeOut, increment incorrect by 1, hide question, and display the next question.

$(".answers").on("click", ".ans", function() {
    $(".counter").removeClass("hide");
    counter = 20;
    clearInterval(timer);
    clearInterval(second);
    timer = setInterval(quizTime, 20000);
    second = setInterval(trackTime, 1000);
    $(".question" + round).addClass("hide");
    round++;
    $(".question" + round).removeClass("hide");    
    if (round === 11 && $(this).hasClass("correct")) {
        correct++;
        clearInterval(second);
        clearInterval(timer);
    }
    else if (round === 11 && $(this).hasClass("incorrect")) {
        incorrect++;
        clearInterval(second);
        clearInterval(timer);
    }
    else if ($(this).hasClass("correct")) {
        correct++;
        correct = correct;
    }
    else {
        incorrect++;
        incorrect = incorrect;
    }
    //if a selection is made, hide question, reset timer, and display next question and image. Also increment correct or incorrect by 1.

    //After all 10 questions have been answered or timed out, display end screen with "loading bar" showing percentage correct, number of questions correct out of total

    if (correct >= 6) {
        $(".winLose").html("<img class='questionPic' src='assets/images/dndvictory.png' alt='victorypic'>");
        $("#passFail").text("Passed");
        $(".ratio").text("You answered " + correct + " out of 10 correctly! We feast tonight!");
    }
    else {
        $(".winLose").html("<img class='questionPic' src='assets/images/dndtpk.png' alt='tpk'>");
        $("#passFail").text("Failed");
        $(".ratio").text("You answered " + correct + " out of 10 correctly! Do better!");
}})
var restart = $(".again").on("click", function() {
    $(".question11").addClass("hide");
    $(".question1").removeClass("hide");
    clearInterval(trackTime);
    clearInterval(quizTime);
    trackTime();
    counter = 20
    timer = setInterval(quizTime, 20000);
    correct = 0;
    incorrect = 0;
    round = 1;
})
})