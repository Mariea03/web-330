/*
  Pragmatic JavaScript
  Chapter 3
  Programming Assignment

  Author: Mariea Nies 
  Date: 07/13/2025
  Filename: chefs.js
*/

"use strict";

// Define an array object
let chefs =[
    {
        name: "Wolfgang Puck",
        specialty:"California cuisine",
        weakness:"Disorganized",
        restaurantLocation:"Las Vegas, Beverly Hills, London, New York, Singapore, and Budapest "
    },

       {
        name: "Emeril Lagasse",
        specialty:"Creole and Cajun cuisine",
        weakness: "Everything must be made from scratch",
        restaurantLocation:"New Orleans, Las Vegas, Florida, and Pennsylvania"
    },

       {
        name: "Guy Fieri",
        specialty:"Comfort Food",
        weakness: "Does not like eggs",
        restaurantLocation:"Newark Liberty International Airport, Mount Airy Casino, Alantic City, and Greensburg, Pa"
    }
];

// Define a function to retrieve the first chef's information
function retrieveChef1() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.7) {
                resolve(chefs[0]);
            } else {
                reject("Failed to load Chef 1's data.")
            }
        }, 2000);
    });
}

// Define a function to retrieve the second chef's information
function retrieveChef2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.7) {
                resolve(chefs[1]);
            } else {
                reject("Failed to load Chef 2's data");
            }
        }, 3000);
    });
}

// Define a function to retrieve the third chef's information
function retrieveChef3() {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            if (Math.random() < 0.7) {
                resolve(chefs[2]);
            } else {
                reject("Failed to load Chef 3's data.");
            }
        }, 4000);
    });
}

function renderChefData(section, chef) {
    section.innerHTML = "";

    const name = document.createElement("p");
    name.innerHTML = `<strong>Name:</strong> ${chef.name}`;

    const specialty = document.createElement("p");
    specialty.innerHTML = `<strong>Specialty:</strong> ${chef.specialty}`;

    const weakness = document.createElement("p");
    weakness.innerHTML = `<strong>Weakness:</strong> ${chef.weakness}`;

    const location = document.createElement("p");
    location.innerHTML = `<strong>Restaurant Location:</strong> ${chef.restaurantLocation}`;

    section.appendChild(name);
    section.appendChild(specialty);
    section.appendChild(weakness);
    section.appendChild(location);
}

function renderError(section,message) {
    section.innerHTML = "";
    const error = document.createElement("p");
    error.className = "error";
    error.textContent = message;
    section.appendChild(error);
}

window.onload = function () {
    Promise.allSettled([retrieveChef1(), retrieveChef2(), retrieveChef3()])
    .then((results) => {
        results.forEach((result, index) => {
            const section = document.querySelector(`#chef${index + 1} .chef-info`);
            if (result.status === "fulfilled") {
                renderChefData(section, result.value);
            } else {
                renderError(section, result.reason);
            }
        });
    });
};