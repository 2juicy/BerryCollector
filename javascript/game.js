var wins = 0;
var loses = 0;
var totalScore = 0;
var randomNum = ((Math.floor(Math.random() * 101) +19));
randomArr = new Array;
for (let i = 0; i < 4; i++){
    let random = (Math.floor(Math.random() * 12) +1);
    randomArr.push(random);
}
document.getElementById("yourNum").innerHTML = randomNum;
function randomizeNum(){
    randomNum = ((Math.floor(Math.random() * 101) + 19));
    randomArr = [];
    for (let i = 0; i < 4; i++){
        let random = (Math.floor(Math.random() * 12) +1);
    randomArr.push(random);
    }
    document.getElementById("yourNum").innerHTML = randomNum;
    totalScore = 0;
}
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
$(".container").on("click", ".item", function() {
	let userPick = $(this).val();
    scoreTrack();
    document.getElementById("yourWins").innerHTML = 'Wins: ' + wins;
    document.getElementById("yourLoses").innerHTML = 'Loses: ' + loses;
    document.getElementById("yourTotal").innerHTML = totalScore;
});