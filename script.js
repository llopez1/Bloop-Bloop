
var response = prompt("Do you need to find a restroom?" "[Y]es"), ;

function clickedButton() {
    document.getElementById("restroomlist").classList.remove("hide")  
}
document.getElementById("restroomButton").addEventListener("click", clickedButton);

function showrestroom () {
    document.getElementById("showthis").classList.remove("hide")
    }
    document.getElementById("toilet").addEventListener("click", showrestroom);




// IMMEDIATE NEXT ACTIONABLE STEPS
// next stepts: in the HTML create some paragraphs and add a class to hide the paragraphs, like we did today. 
// And then each method, be sure you targetting the right paragraph to show
// Look at ways to write less code
// Think about ways you can store variables
// If you write something more than once, it should be a variable or a function. 