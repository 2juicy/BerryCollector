let wins = 0;
let loses = 0;
let totalScore = 0;
let randomNum = Math.floor(Math.random() * 101) + 19;
let randomArr = new Array();

for (let i = 0; i < 4; i++) {
  let random = Math.floor(Math.random() * 12) + 1;
  randomArr.push(random);
}

document.getElementById("yourNum").innerHTML = randomNum;

function randomizeNum() {
  randomNum = Math.floor(Math.random() * 101) + 19;
  randomArr = [];
  for (let i = 0; i < 4; i++) {
    let random = Math.floor(Math.random() * 12) + 1;
    randomArr.push(random);
  }
  document.getElementById("yourNum").innerHTML = randomNum;
  totalScore = 0;
}

function scoreTrack(userPick) {
  totalScore = randomArr[userPick] + totalScore;
  if (totalScore > randomNum) {
    loses++;
    randomizeNum();
    document.getElementById("winOrLose").innerHTML = "You Lose!";
  } else if (totalScore == randomNum) {
    wins++;
    randomizeNum();
    document.getElementById("winOrLose").innerHTML = "You Win!";
  }
}

const buttons = document.querySelectorAll(".item");

buttons.forEach(button =>
  button.addEventListener("click", function() {
    scoreTrack(this.value);
    document.getElementById("yourWins").innerHTML = "Wins: " + wins;
    document.getElementById("yourLoses").innerHTML = "Loses: " + loses;
    document.getElementById("yourTotal").innerHTML = totalScore;
  })
);
