
var $ = function(id) { return document.getElementById(id); };

var computer = ['rock','paper','scissor']; // Array to save rock paper ans sccessor
var randomIndex = Math.floor(Math.random() * computer.length); // select randomely from array
var randomElement = computer[randomIndex];

var content = function(){
	$("temp").innerHTML = randomElement; // show computer selected option
    $("play").innerHTML = ("Play Again");
};

var choice = function(){
	var btnn = "";
	var button = this; // if button entered
	var btnArray = document.getElementsByTagName("button"); // array of buttons

	for(var i= 0; i < btnArray.length;i++){
		if (btnArray[1] == button) {
		var btnn = $("btn0").value;
		}
		else if(btnArray[2] == button){
		var btnn = $("btn1").value;
		}
		else if (btnArray[3] == button) {
		var btnn = $("btn2").value;
		}
	};
	$("demo").innerHTML = btnn; //show player's selected option
	

};


var decider = function(btnn){ //logic to determine who won game
	content(); // call content function
    // choice();
if ($("temp").innerHTML == 'rock' &&  $("demo").innerHTML == 'rock'){
	
		console.log("Game draw");
		document.getElementById("msg").innerHTML = ("Game Draw");
	}
	else if($("temp").innerHTML == 'rock' && $("demo").innerHTML == 'paper'){
	    console.log("You won the game");
	    document.getElementById("msg").innerHTML = ("You won the game");	
	}
	else if ($("temp").innerHTML == 'rock' && $("demo").innerHTML == 'scissor'){
		console.log("You lost the game");
		document.getElementById("msg").innerHTML = ("You lost the game");
	}
	else if ($("temp").innerHTML == 'paper' && $("demo").innerHTML == 'paper') {
	    console.log("Game draw");
		document.getElementById("msg").innerHTML = ("Game draw");
	}
	else if ($("temp").innerHTML == 'paper' && $("demo").innerHTML == 'rock') {
		console.log("You Lost the game");
		document.getElementById("msg").innerHTML = ("You lost the game");
	}
	else if ($("temp").innerHTML == 'paper' && $("demo").innerHTML == 'scissor'){
		console.log("You won the game");
		document.getElementById("msg").innerHTML = ("You won the game");
	}
	else if ($("temp").innerHTML == 'scissor' && $("demo").innerHTML == 'scissor'){
		console.log("Game draw");
		document.getElementById("msg").innerHTML = ("Game draw");
	}
	else if ($("temp").innerHTML == 'scissor' && $("demo").innerHTML == 'rock') {
		console.log("You won the game");
		document.getElementById("msg").innerHTML = ("You won the game");
	}
	else if ($("temp").innerHTML == 'scissor' && $("demo").innerHTML == 'paper') {
		console.log("You lost the game");
		document.getElementById("msg").innerHTML = ("You lost the game");
	}
	$("Again").setAttribute("class", "bt");
};	

var playAgain = function(){    //clear all the field
	$("demo").innerHTML = "";
	$("temp").innerHTML = "";
	$("Again").removeAttribute("class"); //remove if there's any class
	$("msg").innerHTML = "";
	$("play").innerHTML = "";
}

window.onload = function(){
	$("result").onclick = decider; //on click event run decider function
	$("play").onclick = playAgain; //on click event run playAgain function
	var buttons = document.getElementsByTagName("button");
	var buttonsCount = buttons.length;
	for (var i = 0; i <= buttonsCount; i += 1) {
    	buttons[i].onclick = choice;
    };
};    
	
	
