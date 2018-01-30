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

//Object literally created
var my_other_course = {name:"Mobile Application Dev", code:"cit261", instructor:"Baer"}; 

//Object created with constructor 
var my_course = new Course("Database Design & Development", 225, "Bowden");

//The constructor. Creates a Course Object.
function Course(name, code, instructor) {
	this.name = name;
	this.code = code;
	this.instructor = instructor;
}

//Display some info using both objects created.
function objButton_clicked() {
	alert("I take a class called " + my_course.name
		+ " taught by " + my_course.instructor 
		+ ". I also take " + my_other_course.name
		+ " taught by " + my_other_course.instructor);
}

function protoButton_clicked(){
	var my_course_1 = new Course("Mobile Application Dev", 261, "Baer");

	Course.prototype.time = "Wed 2:30";

	Course.prototype.display = function() {
		var output;
		output = this.name + " " + String(this.code) + " " + this.instructor + " " + this.time;
		return output;
	}

	alert(my_course_1.display());
}
Course.prototype.display = function() {
		var output;
		output = this.name + " " + String(this.code) + " " + this.instructor + " " + this.time;
		return output;
	}
//The function that is called upon clicking the 
//    Create Course Button
function properties_button_clicked(){
	//Get input from the user
	var courseName       = document.getElementById("courseNameInput").value;
	var courseCode       = document.getElementById("courseCodeInput").value;
	var courseInstructor = document.getElementById("courseInstructorInput").value;
	var courseTime       = document.getElementById("courseTimeInput").value;
	
	//Create the object with constructor
	var myCourse = new Course(courseName, courseCode, courseInstructor);
	
	// Add course time (this is not part of the constructor)
	myCourse.time = courseTime;
	
	//Display the data
	alert(myCourse.display());
}

//Runs when change text button is clicked
function change_text_button_clicked() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status ==200) {
			document.getElementById("textToChange").innerHTML =
			this.responseText;
		}
	}
	xhttp.open("GET", "textExample.txt", true)
	xhttp.send();
}

function get_movie_data_button_clicked(){
	//Get movie title from user input
	var movieTitle = document.getElementById("movieInput").value;

	//Create the URL with the title as a parameter
	var url = "https://www.omdbapi.com/?apikey=39ebc70b&s=" + movieTitle;
	
	//Instantiate a XMLHttpRequest objext and define 
	//    the onreadystatechange function
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status ==200) {
			var jsonObj = JSON.parse(this.responseText);
			console.log(jsonObj);
			displaySearchResults(jsonObj);
		}
	}

	//Add request type and URL
	xhttp.open("GET", url, true)

	//Send request
	xhttp.send();
}

function displaySearchResults(jsonObj) {
	//Our main body or "parent"
	var main = document.getElementsByClassName("main")[0];

	//Delete results if there exists results from a previous search
	var previousTable = document.getElementById("resultsTable");
	if (previousTable != null) {
		main.removeChild(previousTable);
	}

	//Create the table 
	var table = document.createElement("table");
	table.setAttribute("id", "resultsTable");

	//Create the first row
	var titleRow = document.createElement("tr");
	titleRow.classList.add("results");

	//Create title element
	var titleColElem = document.createElement("th");
	titleColElem.classList.add("results");
	var titleColNode = document.createTextNode("Title");
	titleColElem.appendChild(titleColNode);
	titleRow.appendChild(titleColElem);

	//Create year element
	var yearColElem = document.createElement("th");
	yearColElem.classList.add("results");
	var yearColNode = document.createTextNode("Year");
	yearColElem.appendChild(yearColNode)
	titleRow.appendChild(yearColElem);

	//Create Poster element
	var posterColElem = document.createElement("th");
	posterColElem.classList.add("results");
	var posterColNode = document.createTextNode("Poster");
	posterColElem.appendChild(posterColNode);
	titleRow.appendChild(posterColElem);

	//add row to table
	table.appendChild(titleRow);


	for (var i = 0; i < jsonObj.Search.length; i++) {
		//create row element
		var myRow = document.createElement("tr");
		myRow.classList.add("results");

		//create and add element for title 
		var titleElem = document.createElement("th");
		titleElem.classList.add("results");
		var titleNode = document.createTextNode(jsonObj.Search[i].Title);
		titleElem.appendChild(titleNode);

		//add title element to the row
		myRow.appendChild(titleElem);

		//create and add element for year
		var yearElem = document.createElement("th");
		yearElem.classList.add("results");
		var yearNode = document.createTextNode(jsonObj.Search[i].Year);
		yearElem.appendChild(yearNode);

		//add year element to row
		myRow.appendChild(yearElem);

		//create element for poster image
		var posterElem = document.createElement("th");
		posterElem.classList.add("results");
		var imageElem = document.createElement("img");
		imageElem.src = jsonObj.Search[i].Poster;
		imageElem.classList.add("poster");
		posterElem.appendChild(imageElem);

		//add poster to row
		myRow.appendChild(posterElem);


		//add row to table
		table.appendChild(myRow);
	}

	//Add table to Document
	placeBeforeThis = document.getElementById("resultExplanation");
	main.insertBefore(table, placeBeforeThis);
}