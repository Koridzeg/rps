const possibleChoices = document.getElementsByClassName("move");
const displayScore = document.getElementById("display-score");

type gameState = {
  score: number;
  computerChoice: string;
  userChoice: string;
};

const state: gameState = {
  score: 0,
  computerChoice: "",
  userChoice: "",
};

const getComputerChoice = () => {
  const rpsOptions = ["rock", "paper", "scissor", "lizard", "spock"];
  const randomOption =
    rpsOptions[Math.floor(Math.random() * rpsOptions.length)];
  return randomOption;
};

const displayScoreByState = () => {
  if (displayScore != undefined) {
    displayScore.innerHTML = `${state.score}`;
  }
};

const getResults = () => {
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

const main = () => {
  for (let i = 0; i < possibleChoices.length; i++) {
    possibleChoices[i].addEventListener("click", (e: any) => {
      state.userChoice = e.target?.id;
      state.computerChoice = getComputerChoice();
      getResults();
      displayScoreByState();
    });
  }
};

displayScoreByState();

main();

export default {};
