/*
  Pragmatic JavaScript
  Chapter 4
  Programming Assignment

  Author: Mariea Nies
  Date: 07/20/25
  Filename: script.js
*/

"use strict";

const movies = [
 {
   title: "Back to the Future",
   director: "Robert Zemeckis",
   year: 1985,
   synopsis: "A teenager travels back in time to 1955 and must ensure his parents fall in love."
 },

 {
    title: "The Terminator",
    director:"James Cameron",
    year: 1984,
    synopsis: "A cyborg assassin is sent from the future to kill a woman whose unborn son will lead a resistance."
 },

 {
    title: "Ghostbusters",
    director: "Ivan Reitman",
    year: 1984,
    synopsis: "A group of scientists start a ghost-catching business in New York City."
 },

 {
    title: "The Breakfast Club",
    director: "John Hughs",
    year: 1985,
    synopsis: "Five high school students bond during Saturday detention."
 },

 {
    title: "E.T, The Extra-Terrestrial",
    director: "Steven Spielberg",
    year: 1984,
    synopsis: "A boy befriends a stranded alien and helps him return home while avoiding authorities."
 },
];

function fetchMovie(title) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        const movie = movies.find(m => m.title.toLowerCase() === title.trim().toLowerCase());
        movie ? resolve(movie) : reject("Movie not found. Try a different 80's title");
    }, 800);
  });
}

document.getElementById("movie-form").addEventListener("submit", async (event) => {
   event.preventDefault();

   const title = document.getElementById("title-input").value;
   const errorEl = document.getElementById("error-message");
   const movieTitle = document.getElementById("movie-title");
   const movieDirector = document.getElementById("movie-director");
   const movieYear = document.getElementById("movie-year");
   const movieSynopsis = document.getElementById("movie-synopsis");

   errorEl.textContent = "";
   movieTitle.textContent = "";
   movieDirector.textContent = "";
   movieYear.textContent = "";
   movieSynopsis.textContent = "";

   try {
    const movie = await fetchMovie(title);
    movieTitle.textContent = movie.title;
    movieDirector.textContent = `Director: ${movie.director}`;
    movieYear.textContent = `Release Year: ${movie.year}`;
    movieSynopsis.textContent = `Synopsis: ${movie.synopsis}`;
   } catch (error) {
    errorEl.textContent = error;
    errorEl.style.color = "red";
   }
});