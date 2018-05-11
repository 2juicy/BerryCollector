//global variables
var wins = 0;
var loses = 0;
var score = 0;
var totalScore = 0;
var randomNum = (Math.floor(Math.random() * 999));
gameCheck = false;



$(document).ready(function() {

      $(".center").on("click", "#item", function() {

      	if (gameCheck !== true) {
      		var yourPick = $(this).val();
          	console.log("Your Pick: " + yourPick);
      	}

      })