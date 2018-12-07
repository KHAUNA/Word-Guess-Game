// game javascript 
//set game options, will be chosen at random

//THE FOLLOWING CODE NEEDS:

//I AM LIKE 99% DONE!  I JUST NEEDED TO ADJUST THE CODE A BIT SO THAT
//THE GAMES ENDS ON YOUR LAST LETTER GUESS, THE GAME CURRENTLY ENDS
//AFTER YOUR LAST LETTER


var carChoices = [
    "Placeholder: Random choice starts a minimum index 1",
    ["C","O","R","V","E","T","T","E"],
    ["C","A","M","A","R","O"],
    ["G","T","O"],
    ["B","A","R","R","A","C","U","D","A"],
    ["C","H","A","R","G","E","R"],
    ["C","O","R","V","E","T","T","E"],
    ["C","H","E","V","E","L","L","E"],
    ["P","A","N","T","E","R","A"],
];
//Comp guesses random car in array
var randCar = carChoices[Math.floor((Math.random() * 8) + 1)];
//convert randCar array to string for future use
var randCarString = randCar.join("");
//Declare other variables
var blankstring;
var blank=[];
var triesnum = 7;
var node = document.createElement("h4");
var textnode;
//run functions on page loading
window.onload = function() {
    addblanks();
}
//function adds blanks below the hangman image
var addblanks = function() {
//for loop uses length of chosen car in the array to determine how many spaces are needed
    for (i=0; i < randCar.length; i++) {
        blank[i] = "_ "
    };
    for (i=0; i < randCar.length; i++) {
    };
//combine the array as a string and paste string to div to show spaces
    blankstring = blank.join("");
    document.getElementById("guessBlanks").innerHTML = blankstring;
    };

//fun function code when any button is pressed
document.onkeyup = function pressed() {
//variables to define and set what key is pressed while making it uppercase
    var pressedletter = event.key;
    var pressedletter = pressedletter.toUpperCase();
//variables to help enter if statements below
    var verdict = false;
    var checkstring = blank.join(" ");
    checkstringfinal = checkstring.includes("_")

    for (i=0; i < randCar.length; i++) {
    //when a correct letter is pressed, this replaces _ in array with that letter,
    //then reforms array to string
        if (randCar[i] === pressedletter) {
            blank[i] = pressedletter;
            someblanks = document.getElementById("guessBlanks").innerHTML = blank.join(" ");
            verdict = true;  
        }
    }
    if (verdict === false) {
    //when verdict = false, which means it did not pass through the true if statement,
    //it displays the wrong guessed letter and reduces your remaining turns
        document.getElementById("tries").innerHTML = triesnum;
        textnode = document.createTextNode(pressedletter); 
        node.appendChild(textnode);
        document.getElementById("wrongguess").appendChild(node);
        triesnum = triesnum - 1;
    }
    //finally, checkstringfinal looks to determine if there are any _ spaces left,
    //if there are no _ spaces left then you have guessed the right word
    if (checkstringfinal === false) {
        alert("You win homie");
        location.reload();
    }else if (triesnum+1 <0) {
        alert("You know this game is for kids right?")
        location.reload();
    }
};



