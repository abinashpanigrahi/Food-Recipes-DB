const getData = async(url) => {
    try{
        let fetchPromise = await fetch(url);
        let responseData = await fetchPromise.json();
        return responseData;
    }
    catch(e){
        return e;
    }
}

const appendData = (container, data, type) => {
    container.innerHTML = null;
    //console.log("data", data);
    if(type === "single"){
        data.forEach((el) => {
            let foodDiv = document.createElement("div");
    
            let imgDiv = document.createElement("div");
            let foodImg = document.createElement("img");
            foodImg.src = el.strMealThumb;
            imgDiv.setAttribute("class","thumbnail");
            imgDiv.append(foodImg);
    
            let ingredientsDiv = document.createElement("div");
            ingredientsDiv.setAttribute("class", "ingredients");
    
            let ingredientsHeading = document.createElement("h2");
            ingredientsHeading.textContent = "Ingredients";
            ingredientsDiv.append(ingredientsHeading);
    
            let ingredientsList = document.createElement("ul")
            for(let i=1; i<=20; i++){
                let ing = `strIngredient${i}`;
                let measure = `strMeasure${i}`;
                if(el[ing] && el[ing].length>0){
                    let item = document.createElement("li");
                    item.textContent = `${el[ing]} (${el[measure]})`;
                    ingredientsList.append(item);
                }
            }
    
            ingredientsDiv.append(ingredientsList);
    
    
            let instructionsDiv = document.createElement("div");
            let instructionsHeading = document.createElement("h2");
            instructionsHeading.textContent = "Instructions";
            instructionsDiv.append(instructionsHeading);
    
    
            let mealInstructions = el.strInstructions.split(". ");
            let instructionList = document.createElement("ol");
            for(let i=0; i<mealInstructions.length; i++){
                let instructions = document.createElement("li");
                instructions.innerHTML = mealInstructions[i];
                instructionList.append(instructions);
            }
            
            instructionsDiv.append(instructionList);
            
            instructionsDiv.setAttribute("class", "instructions");
    
            foodDiv.append(imgDiv, ingredientsDiv, instructionsDiv);
            foodDiv.setAttribute("class", "foodDiv");
    
            container.append(foodDiv);
        });
    }

    else if(type === "multiple"){
        data.forEach((el) => {
            console.log(el);
            if(el[0] === undefined){
                var {strMeal: name, strMealThumb: image} = el;
            }
            else{
                var {strMeal: name, strMealThumb: image} = el[0];
            }

            console.log(name, image);

            let foodDiv = document.createElement("div");
            foodDiv.setAttribute("class", "foodDiv");

            let foodImg = document.createElement("img");
            foodImg.src = image;

            let foodName = document.createElement("p");
            foodName.textContent = name;
            foodName.setAttribute("class", "name");

            foodDiv.append(foodImg, foodName);

            container.append(foodDiv);
        })
    }
}

export {getData, appendData};