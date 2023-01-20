"use strict";
exports.__esModule = true;
var possibleChoices = document.getElementsByClassName("move");
var displayScore = document.getElementById("display-score");
var state = {
    score: 0,
    computerChoice: "",
    userChoice: ""
};
var getComputerChoice = function () {
    var rpsOptions = ["rock", "paper", "scissor", "lizard", "spock"];
    var randomOption = rpsOptions[Math.floor(Math.random() * rpsOptions.length)];
    return randomOption;
};
var displayScoreByState = function () {
    if (displayScore != undefined) {
        displayScore.innerHTML = "".concat(state.score);
    }
};
var getResults = function () {
    switch (state.userChoice + state.computerChoice) {
        case "rockrock":
        case "spockspock":
        case "lizardlizard":
        case "paperpaper":
        case "scissorscissor":
            console.log("draw");
            break;
        case "rockscissor":
        case "rocklizard":
        case "lizardspock":
        case "lizardpaper":
        case "spockscissor":
        case "spockrock":
        case "scissorpaper":
        case "scissorlizard":
        case "paperrock":
        case "paperspock":
            console.log("win");
            state.score++;
            break;
        case "scissorrock":
        case "lizardrock":
        case "spocklizard":
        case "paperlizard":
        case "scissorspock":
        case "rockspock":
        case "paperscissor":
        case "lizardscissor":
        case "rockpaper":
        case "paperspock":
            console.log("lose");
            state.score--;
            break;
    }
};
var main = function () {
    for (var i = 0; i < possibleChoices.length; i++) {
        possibleChoices[i].addEventListener("click", function (e) {
            var _a;
            state.userChoice = (_a = e.target) === null || _a === void 0 ? void 0 : _a.id;
            state.computerChoice = getComputerChoice();
            console.log(state);
            console.log(state.userChoice + state.computerChoice);
            getResults();
            displayScoreByState();
        });
    }
};
displayScoreByState();
main();
exports["default"] = {};
