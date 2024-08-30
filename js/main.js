var mealslist=document.querySelectorAll('a');
var Meal=document.getElementById('Meal');
let meals=[]
function getmeal(meal){
    var date=new XMLHttpRequest();
   date.open('GET',`https://forkify-api.herokuapp.com/api/v2/recipes?search=${meal}`)
  date.send();
  date.addEventListener('readystatechange',function(){
    if(date.readyState == 4){
meals =JSON.parse(date.response).data.recipes;
        displayMeal()
    }
  })
}
getmeal('pizza')
function displayMeal(){
     let cartoona=``
     for(let i=0;i<meals.length;i++){
            cartoona+=`
            <div class="col-md-4 "    mealId=${meals[i].id} >
           <div class="card text-center h-100"mealId=${meals[i].id} >
            <img src="${meals[i].image_url}" class="card-img w-100" mealId=${meals[i].id} >
            <h3 class="card-title py-3" mealId=${meals[i].id} >${meals[i].publisher}</h3>
            <p class="card-dasc" mealId=${meals[i].id} >${meals[i].title}</p></div>
          
            </div>`
     }
     Meal.innerHTML=cartoona;
}
for(let i=0; i<mealslist.length ;i++){
    mealslist[i].addEventListener('click',function(e){
let tagLink=e.target.innerHTML;
getmeal(tagLink)
console.log(tagLink)
    })
}
