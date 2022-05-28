import navbar from "../components/navbar.js";

import {getData, appendData} from "./fetch_append.js";

document.querySelector("#header").innerHTML = navbar();

let randomRecipe = await getData(`https://www.themealdb.com/api/json/v1/1/random.php`);

const container = document.getElementById("container");

document.getElementById("msg").textContent = `Recipe of the Day - ${randomRecipe.meals[0].strMeal}`;

appendData(container, randomRecipe.meals, "single");

// const get = async () => {
//     try{
//         let fetchFood = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=spicy`);
//         let response = await fetchFood.json();
//         // let randomFetch = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`);
//         // let res = await randomFetch.json();
//         // let latestFetch = await fetch(`https://www.themealdb.com/api/json/v1/1/latest.php`);
//         // let res2 = await latestFetch.json();
//         console.log("search", response);
//         // console.log("randome", res)
//         // console.log("latest", res2)
//     }
//     catch(e){
//         console.log(`error: ${e}`)
//     }
// }

// get();

// Assignments\Assignment 10 - The Meal DB\components