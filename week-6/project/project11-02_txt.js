"use strict";
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-02

      Project to city and state information from a provided postal code
      Author: Mariea Nies 
      Date: 07/06/2025  

      Filename: project11-02.js
*/

let postalCode = document.getElementById("postalCode");
let place = document.getElementById("place");
let region = document.getElementById("region");
let country = document.getElementById("country");

postalCode.onblur = function() {
 let codeValue = postalCode.value.trim();
 let countryValue = country.value.trim().toLowerCase();

 // Clear the output fields
 place.value = "";
 region.value = "";

 // Validate input
 if (!codeValue || !countryValue) {
    console.log("Postal code or country is missing.")
    return;
 }

 // Construct API URL
 let apiURL = `http://api.zippopotam.us/${countryValue}/${codeValue}`;
 console.log("Fetching data from:", apiURL);

 fetch(apiURL)
 .then(response => {
    if (!response.ok) {
        throw new Error(`API returned status ${response.status}`);
    }
    return response.json();
 })

.then(json => {
   if (json.places && json.places.length > 0) {
    place.value = json.places[0]["place name"];
    region.value = json.places[0]["state abbreviation"]
   } else{
    place.value = "No place found.";
    region.value = "No region found.";
   }
})

.catch(error => {
    console.error("Fetch error:", error.message);
    place.value = "Error fetching data.";
    region.value = "Error feching data.";
});

};