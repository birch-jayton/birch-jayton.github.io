function showLabel(label) {
	document.getElementById('label').innerHTML = label;
	document.getElementById('label').style.visibility = "visible"
}

function clearLabel() {
	//document.getElementById('label').innerHTML = "";
	document.getElementById('label').style.visibility = "hidden"
}

function displayName() {
	var enteredName = document.getElementById('nameInput').value
	alert("Your name is " + enteredName)
}

//Add two to entered number
function addTwo() {
	var enteredNumber = Number(document.getElementById('numInput').value)
	var finalNumber = enteredNumber + 2;
	return finalNumber;
}

//Displays new number in an alert
function addTwoClicked() {
	alert("The number + 2 = " + addTwo())
}

//Displays new number in an alert
function addTwoClicked_2() {
	var enteredNumber = Number(document.getElementById('numInput').value)
	alert(enteredNumber + " + 2 = " + addTwo(enteredNumber))
}

//Add two to entered number
function addTwo_2(number) {
	var finalNumber = number + 2;
	return finalNumber;
}

function verifyNumber() {
	// Get value to check
	var enteredNumber = Number(document.getElementById('numInput').value)

	// Check which condition is satisfied. 
	if (enteredNumber == 7) {	
		alert("You entered my favorite number!")		//Runs if the first condition is true
	} else if (enteredNumber == 3) {
		alert("You entered my second favorite number!")	//Runs if true and first conditon is false
	} else {
		alert("You didn't pick the right number :(")	//Runs when neither of te conditions are met.
	}
}

//Array of animals (strings)
var animalsInYard = ["dog", "sheep", 
					"cat", "dog", "lamb", 
					"dolphin", "pig", "dog", 
					"cow", "goat", "dog", 
				 	"cat"];


function arrayButtonClicked() {
	alert(animalsInYard.length) //displays amount of animals
}

//Named index
var cit_class = {name:"Mobile Application Dev", code:"cit261", instructor:"Baer"}; 

function showFirstAnimal() {
	alert(animalsInYard[0])
}

function showClassName() {
	alert(cit_class.name)
}

function for_loop_button_clicked(){
	var dog_count = 0;
	for (var i = 0; i < animalsInYard.length; i++) {
		if (animalsInYard[i] == "dog") {
			dog_count++;
		}
	}
	alert("The number of dogs is " + dog_count)
}

function forin_button_clicked(){
	var text = "";
	var x;
	for (x in cit_class) {
    	text += cit_class[x];
    	text += " ";
	}

	alert(text);
}

function while_button_clicked() {
	var i = 0
	var number = " ";
	while (i < 10) {
    	number += "The number is " + i;
    	console.log(number)
    	i++;
	}
}

function dowhile_button_clicked() {
	var i = 0
	var number = "";
	do {
	    number += "The number is " + i;
	    console.log(number)
	    i++;
	}
	while (i < 10)
}