"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-01

      Project to read field values from session storage
      Author: Mariea Nies 
      Date:   June 14 2025

      Filename: project09-02b.js
*/

/* Page Objects */

let riderName = document.getElementById("riderName");
let ageGroup = document.getElementById("ageGroup");
let bikeOption = document.getElementById("bikeOption");
let routeOption = document.getElementById("routeOption");
let accOption = document.getElementById("accOption");
let region = document.getElementById("region");
let miles = document.getElementById("miles");
let comments = document.getElementById("comments");

// Membership Information Preference Keys
let keys = ["riderName", "ageGroup", "bikeOption", "routeOption", "accOption", "region", "miles", "comments"];

// Loop through each key and create table and rows
for (let item of keys) {
    let newRow = document.createElement("tr");

    // Display the storage key
    let keyCell = document.createElement("td");
    keyCell.textContent = item;
    newRow.appendChild(keyCell);

    // Display the key value from sessionStorage
    let valueCell = document.createElement("td");
    valueCell.textContent = sessionStorage.getItem(item);
    newRow.appendChild(valueCell);

    // append the row to the table
    document.getElementById("order").appendChild(newRow);
}