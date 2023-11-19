import searchForm1 from "./search.js"

const grid = document.querySelector('.grid')
const icon = document.querySelector('.nav')
const side = document.querySelector('.side-i')
const sidebar = document.querySelector('.side-bar')
const bar = document.querySelector('.side')
const loader = document.querySelector('.loader-1')

icon.addEventListener('click', () => {
    if (!sidebar.classList.contains('show-sidebar')) {
        sidebar.classList.add('show-sidebar')
    }
})

side.addEventListener('click', () => {
    if (sidebar.classList.contains('show-sidebar')) {
        sidebar.classList.remove('show-sidebar')
    }
})


 const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';


const fetchData = async () => {
 try {
  loader.innerHTML = `<div class='loader'></div>`
  const response = await fetch(url)
  const cocktail = await response.json()

  const product = cocktail.drinks

 searchForm1(product,grid)



loader.innerHTML = ''
const ocean = product.map((items) =>{
  const {idDrink: id, strDrink: Name, strDrinkThumb: images, 
      strIngredient1: ingredient1,  strIngredient2: ingredient2,  strIngredient3: ingredient3} = items
      
  return ` <a href="">
  <div class="image">
      <img src="${images}" alt="" class="img">
 <h4>${Name}</h4>
 <h5>Ingredients</h5>
 <ul>
<li>${ingredient1}</li>
<li>${ingredient2}</li>
<li>${ingredient3}</li>
 </ul>
 <div class="btn">
 <button>Add to Cart</button>
 </div>
  </div>
</a>`
}).join('')

grid.innerHTML = `${ocean}`
 } catch (error) {
  
 }
 
}
fetchData()





