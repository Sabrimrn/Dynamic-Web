"use strict"
const knoop = document.getElementById("begroeting");
        knoop.addEventListener("click", () => {
            knoop.textContent = knoop.textContent === "Hallo!" ? "Tot ziens!" : "Hallo!";
        });