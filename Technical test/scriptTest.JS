let cocktails = [];
fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
    .then(resp => resp.json())
    .then(data => {
        console.log(data.drinks)
        let random = Math.floor(Math.random() * 20)
        console.log(random)
        list = data.drinks[random];


        let newHtml = `
   <div class="card" style="width: 18rem;">
        <img src= "${list.strDrinkThumb}" width=300px height=300px>
        <div class="card-body">
            <h3 class="card-title">${list.strDrink}</h3>
            <ul>
                <li>${list.strIngredient1}</li>
                <li>${list.strIngredient2}</li>
                <li>${list.strIngredient3}</li>
            </ul>

        </div>
    </div>`
        document.getElementById('cocktailCard').innerHTML = newHtml;




    });