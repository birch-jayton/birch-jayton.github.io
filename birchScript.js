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