//global variables
var wins = 0;
var loses = 0;
var score = 0;
var totalScore = 0;
var randomNum = ((Math.floor(Math.random() * 101) +19));
var randomArr = [];
var random0 = (Math.floor(Math.random() * 12) +1);
var random1 = (Math.floor(Math.random() * 12) +1);
var random2 = (Math.floor(Math.random() * 12) +1);
var random3 = (Math.floor(Math.random() * 12) +1);
var userPick = 0;
randomArr.push(random0, random1, random2, random3);
console.log(randomArr);
document.getElementById("yourNum").innerHTML = "#: " + randomNum;

//Reset game and randomize number.
function randomizeNum(){
    randomNum = ((Math.floor(Math.random() * 101) + 19));
    randomArr = [];
    random0 = (Math.floor(Math.random() * 12) +1);
    random1 = (Math.floor(Math.random() * 12) +1);
    random2 = (Math.floor(Math.random() * 12) +1);
    random3 = (Math.floor(Math.random() * 12) +1);
    randomArr.push(random0, random1, random2, random3);
    console.log(randomArr);
    document.getElementById("yourNum").innerHTML = "#: " + randomNum;
    totalScore = 0;
}
//Checks score for win condition.
function scoreTrack(){
    totalScore = (randomArr[userPick] + totalScore);
    if (totalScore > randomNum){
        loses++;
        randomizeNum();  
        $("#winOrLose").text('You Lose!');     
    } else if (totalScore == randomNum){
        wins++;
        randomizeNum(); 
        $("#winOrLose").text('You Win!');    
    }
}
//Document check
$(document).ready(function() {
    $(".container").on("click", ".item", function() {
   		userPick = $(this).val();
        scoreTrack();
        document.getElementById("yourWins").innerHTML = 'Wins: ' + wins;
        document.getElementById("yourLoses").innerHTML = 'Loses: ' + loses;
        document.getElementById("yourTotal").innerHTML = totalScore;
    }); // End of .on(click) function
}); // Document.ready ends here.