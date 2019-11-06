let wins = 0;
let loses = 0;
let totalScore = 0;
let randomNum = Math.floor(Math.random() * 101) + 19;
let randomArr = new Array();
let delay;

function randomizeNum() {
  document.querySelector(".blink").style.visibility = "visible";
  clearTimeout(delay);
  randomNum = Math.floor(Math.random() * 101) + 19;
  randomArr = [];
  for (let i = 0; i < 4; i++) {
    let random = Math.floor(Math.random() * 12) + 1;
    randomArr.push(random);
  }
  document.getElementById("yourNum").textContent = randomNum;
  totalScore = 0;
  delay = setTimeout(() => {
    document.querySelector(".blink").style.visibility = "hidden";
  }, 5000);
}
randomizeNum();

function scoreTrack(userPick) {
  totalScore = randomArr[userPick] + totalScore;
  if (totalScore > randomNum) {
    loses++;
    randomizeNum();
    document.getElementById("winOrLose").textContent = "You Lose";
  } else if (totalScore == randomNum) {
    wins++;
    randomizeNum();
    document.getElementById("winOrLose").textContent = "You Win";
  }
}

document.querySelectorAll(".item").forEach(button =>
  button.addEventListener("click", function() {
    scoreTrack(this.value);
    document.getElementById("yourWins").textContent = wins;
    document.getElementById("yourLoses").textContent = loses;
    document.getElementById("yourTotal").textContent = totalScore;
  })
);
