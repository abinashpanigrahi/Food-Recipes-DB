import navbar from "../components/navbar.js"

import {getData, appendData} from "./fetch_append.js"

let timerId = null;

document.getElementById("header").innerHTML = navbar();

let input = document.getElementById("query");
input.addEventListener("input", () => {
    debounceSearch(searchMeal, 1000);
})

document.getElementById("searchbtn").addEventListener("click", () => {
    searchMeal();
});

let display = document.getElementById("display");

const searchMeal = async () => {
    try{
        let mealName = input.value;
        let mealData = await getData(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`);
        console.log(mealData);
        if(mealData.meals === null){
            document.getElementById("msg").textContent = "No results found";
        }
        else{
            document.getElementById("msg").textContent = "Showing results...";
            appendData(display, mealData.meals, "multiple");
        }
    }
    catch(e){
        console.log(`error: ${e}`)
    }
}



const debounceSearch = (func, delay) => {
    if(timerId){
        clearTimeout(timerId);
    }

    timerId = setTimeout(() => {
        func();
    }, delay)
}

