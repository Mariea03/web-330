/*
  Pragmatic JavaScript
  Chapter 1
  Programming Assignment

  Author:Mariea Nies 
  Date:06/06/25
  Filename:script.js
*/

"use strict";

function createCharacter(name, gender, characterClass) {
  // TODO: Implement this function
  return{
    getName: function() {
        return name;
    },
    getGender: function () {
        return gender;
    },
    getClass: function () {
        return characterClass;
    }
  }; 
}

document.getElementById("generateHero").addEventListener("click", function(e) {
  e.preventDefault();

  // TODO: Get form values
    const name = document.getElementById("heroName").value.trim();
    const gender = document.getElementById("heroGender").value;
    const characterClass = document.getElementById("heroClass").value;


  // TODO: Create character
  const character = createCharacter(name, gender, characterClass);


  // TODO: Display character information
  const output = document.getElementById("characterOutput");
  display.innerHTML =
     <h3>Character Created!</h3>
     <p><strong>Name:</strong> ${character.getName()}</p>
      <p><strong>Gender:</strong> ${character.getGender()}</p>
      <p><strong>Class:</strong> ${character.getClass()}</p>
      ;
});