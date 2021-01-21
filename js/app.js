document.addEventListener('DOMContentLoaded', function() {
    console.log("On load");
    fetchJSON();
});


function fetchJSON() {
    let url = "https://api.spoonacular.com/recipes/random/?apiKey=0db48a98b9ca45d5bac4ed3d71185cfc";
    fetch(url).then(response => {
        return response.json();
    })
    .then(data => {
        let recipe = data.recipes[0];
        let title = recipe.title;
        let img = recipe.image;
        let ingredients = recipe.extendedIngredients;
        let summary = recipe.summary;
        let instructions = recipe.instructions;
        document.querySelector(".main").innerHTML = `
            <h1>${title}</h1>
            <img src="${img}">
        `;

        document.querySelector('.summary').innerHTML = `
            <p>${summary}</p>
        `;
        
        document.querySelector('.instructions').innerHTML = `
        <h2>Instructions</h2>
        ${instructions}
        `;

        let output = ``;
        ingredients.forEach(ingredient => {
            output += `<li>${ingredient.name}: ${ingredient.amount} ${ingredient.unit}</li>`
        });
        document.querySelector(".list").innerHTML = output;
    });
}