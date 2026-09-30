let categoriesContainer=document.getElementById('categoriesContainer');
async function getcategories() {
    let response=await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    let data= await response.json();
    console.log(data);

    data.categories.forEach(value => {

    categoriesContainer.innerHTML+=`<div class="category-card" onclick="getmealdetails('${value.strCategory}')"> 
        <img src="${value.strCategoryThumb}">
        <h3>${value.strCategory}</h3>

        </div>`


});

}
    getcategories();  
 


    let searchInput=document.getElementById('searchInput');
    let mealsContainer=document.getElementById('mealsContainer');
    let searchBtn=document.getElementById('searchBtn');
    let meals_section=document.querySelector('.meals-section ');

    let mealDetails=document.getElementById('mealDetails');
    let meal_details_section=document.querySelector('.meal-details-section');
    searchBtn.addEventListener('click',async ()=>{
        let foodname=searchInput.value;
        console.log(foodname)

        let response= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodname}`)
        let data=await response.json();
        console.log(data);
        mealsContainer.innerHTML = "";
        meals_section.style.display="block";
         data.meals.forEach(meal => {

     
            mealsContainer.innerHTML += `
    <div class="meal-card" onclick="getMealDetails('${meal.idMeal}')">

        <img src="${meal.strMealThumb}" alt="${meal.strMeal}">

        <h3>${meal.strArea}</h3>

        <p>${meal.strMeal}</p>

    </div>
`;
    });
   
    })

//--------------------------------------------------    

let categoryInfo = document.getElementById("categoryInfo");
let categoryName = document.getElementById("categoryName");
let categoryDescription = document.getElementById("categoryDescription");
    async function getmealdetails(categories) {

    mealsContainer.innerHTML = "";

    let response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categories}`
    );

    let data = await response.json();

    meals_section.style.display = "block";

    data.meals.forEach((value) => {

        mealsContainer.innerHTML += `
            <div class="meal-card" onclick="getMealDetails('${value.idMeal}')">

                <img src="${value.strMealThumb}">

                <h3>${categories}</h3>

                <p>${value.strMeal}</p>

            </div>
        `;
    });
}



