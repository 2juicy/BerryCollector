//global variables
var wins = 0;
var loses = 0;
var score = 0;
var totalScore = 0;
var randomNum = ((Math.floor(Math.random() * 100) +49));
var randomArr = [];
var random0 = (Math.floor(Math.random() * 10) +1);
var random1 = (Math.floor(Math.random() * 10) +1);
var random2 = (Math.floor(Math.random() * 10) +1);
var random3 = (Math.floor(Math.random() * 10) +1);
var userPick = 0;
randomArr.push(random0, random1, random2, random3);
document.getElementById("yourNum").innerHTML = "#: " + randomNum;
console.log(randomArr);
function randomizeNum(){
    randomNum = ((Math.floor(Math.random() * 100) +49));
    randomArr = [];
    random0 = (Math.floor(Math.random() * 10) +1);
    random1 = (Math.floor(Math.random() * 10) +1);
    random2 = (Math.floor(Math.random() * 10) +1);
    random3 = (Math.floor(Math.random() * 10) +1);
    randomArr.push(random0, random1, random2, random3);
    document.getElementById("yourNum").innerHTML = "#: " + randomNum;

}
function scoreTrack(){
    totalScore = (randomArr[userPick] + totalScore);
    if (totalScore > randomNum){
        loses++;
        randomizeNum();
        
    } else if (totalScore == randomNum){
        wins++;
        randomizeNum();
        
    } else {
        return;
    }

}
//




$(document).ready(function() {

    $(".container").on("click", ".item", function() {
   		userPick = $(this).val();
        scoreTrack();




    




    document.getElementById("yourWins").innerHTML = 'Wins: ' + wins;
    document.getElementById("yourLoses").innerHTML = 'Loses: ' + loses;
    document.getElementById("yourTotal").innerHTML = totalScore;
    }); // End of .on(click) function






}); // Document.ready ends here.

console.log(randomArr);