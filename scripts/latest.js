import navbar from "../components/navbar.js"

import {getData, appendData} from "./fetch_append.js";

document.getElementById("header").innerHTML = navbar();


// Utility Function to get 8 random recipes to show as latest meals

let latestMeals = [];

let display = document.getElementById("display");

for(let i=0; i<8; i++){
    let mealData = await getData(`https://www.themealdb.com/api/json/v1/1/random.php`);
    latestMeals.push(mealData.meals); 
}

//console.log("latest Meals", latestMeals)
appendData(display, latestMeals, "multiple");




// Function to display latest Meals

