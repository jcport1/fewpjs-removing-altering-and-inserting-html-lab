// Write your code here!

document.querySelector("main#main").remove();

//set document.createElement equal to a const
const newHeader = document.createElement("h1");

//call the methods on new header to assign values 
newHeader.id = "victory"
newHeader.innerHTML = "Flatiron School is the champion!";
newHeader.className = "victory";
