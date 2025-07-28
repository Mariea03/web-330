"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-03

      Project to show a recipe with expanding/contracting content
      Author: Mariea Nies
      Date:   07/27/2025

      Filename: project12-03.js
*/

$(document).ready(function () {
    $("article > h2").click(function(){
        let heading = $(this);
        let list = heading.next();
        let headingImage = heading.children("img");

        list.slideToggle(500);

        let imageSrc = headingImage.attr("src");
        if (imageSrc === "plus.png") {
            headingImage.attr("src", "minus.png");
        } else {
            headingImage.attr("src", "plus.png");
        }
        
    });
});