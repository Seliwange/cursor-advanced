// Part 1
// 1. Add the necessary code to wait for the DOM to load to make sure that anything you manipulate in the DOM has loaded. You can do this either using window.onload or adding an event listener for DOMContentLoaded.
document.addEventListener("DOMContentLoaded", init);

// 2. Replace the text "Change me" with "Hello World!".
function init(){
    document.getElementById("change_heading").textContent = "Hello World!";
}

// 3. When a user hovers over one of the colored boxes change the text to display the color that is being hovered over.
function init(){
    const sectionDiv = document.querySelectorAll("section div");
    for(let i = 0; i < sectionDiv.length; i++){
      sectionDiv[i].addEventListener("mouseover", function(e){
        document.querySelector(".selected").textContent = e.target.className;
      });
    }

    // OR
    /*const section = document.querySelector("section");
    section.addEventListener("mouseover", function(event){
        let selectedColor = document.querySelector('.selected');
        selectedColor.innerText = event.target.className;
    });*/
}

// 4. Create a new div element.
const newDiv = document.createElement("div");

// 5. Give your new div a class of purple and style it so that it has a background color of purple.
newDiv.classList.add("purple");
newDiv.style.backgroundColor = "purple";

// 6. Append your new div to the page to the section tag.
const section = document.querySelector("section");
section.appendChild(newDiv);

// Part 2
// Create a racing game with the two cars. When the race button is pressed, the two cars should move across the screen until one of them is at the end of the screen. When one of the blocks reaches the end - you should alert "winner!"
const startRaceButton = document.querySelector("button").addEventListener("click", startRace);
function startRace(e){
  
  alert("Winner!");
}

// Part 3
// For this assignment you will be combining your knowledge of DOM access and events to build a todo app!
// As a user, you should be able to:
// Add a new todo (by submitting a form)
// Mark a todo as completed (cross out the text of the todo)
// Remove a todo

// Part 4:
// Using localStorage, try to store your todos so that if you refresh the page you do not lose what you have added to the list! As a super bonus, try to also save todos that you have marked as complete!