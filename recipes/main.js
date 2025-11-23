import recipes from "./recipes.mjs";

const search_button = document.getElementById("search");
const text_field = document.getElementById("search-field");

search_button.addEventListener("click", function (event) {
  event.preventDefault();
  console.log(text_field.value.toLowerCase())

  renderRecipes(search(text_field.value.toLowerCase()));
})

function random(num){
    return Math.floor(Math.random()*num);
}

function getRandomListEntry(list){
    const len = list.length;
    const randomNum = random(len);
    return list[randomNum];
}



 




function renderStars(rating, max = 5) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = max - fullStars - (halfStar ? 1 : 0);

  let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of ${max} stars">`;
  for (let i = 0; i < fullStars; i++) {
    html += `<span class="star" aria-hidden="true">⭐</span>`;
  }

  
  if (halfStar) {
    html += `<span class="star-half" aria-hidden="true">⭐</span>`;
  }

  for (let i = 0; i < emptyStars; i++) {
    html += `<span class="star-empty" aria-hidden="true">☆</span>`;
  }

  html += `</span>`;
  return html;
}

function recipeTemplate(recipe){
console.log("running recipetemplate")

    return `<section class="recipe-card"><img
          src="${recipe.image}"
          alt="${recipe.name}"
          id="recipe-img"
        />
        <div class="recipe-info">
          <p id="recipe-tag">${recipe.tags[recipe.tags.length-1].toUpperCase()}</p>
          <h2 id="recipe-title">${recipe.name}</h2>
          ${renderStars(recipe.rating)}
          <p id="recipe-description">
            ${recipe.description}
          </p>
        </div></section>`;
}



function renderRecipes(recipeList){
console.log("running renderRecipes")

    const recipeContainer = document.getElementById("recipe-container");
    let html="";
    
    for(let i = 0;  i <= recipeList.length - 1; i++){
        console.log(i)
        html += recipeTemplate(recipeList[i]);

    }
    recipeContainer.innerHTML = html;
}

function init(){
console.log("running init")

    const firstRecipe = getRandomListEntry(recipes);
    renderRecipes([firstRecipe])
    
}
init()


function search(tag){
    let filtered_recipes = recipes.filter(recipe => {
        let combined = JSON.stringify(recipe).toLowerCase();
        return combined.includes(tag);});
    console.log(filtered_recipes);
    return filtered_recipes.sort();
}