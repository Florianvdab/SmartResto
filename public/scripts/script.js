document.addEventListener("DOMContentLoaded",init);


function init(){
    getMeals().then(function(result){
        displayMeals(result);
    })
}

function getMeals(){
    return repos.getMeals();
}

function displayMeals(meals){
    let list = document.getElementById("meals");
    list.innerHTML = "";

    meals.foreach(function(item){
        list.innerHTML += generateMealListItem(item);
    });
}

function generateMealListItem({name, ingredients, price}){
    return `<p> ${name} </p> \n<p> ${ingredients} </p>\n<p> ${price} </p>`
}