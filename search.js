const form = document.querySelector('.form')
const input = document.querySelector('.input')


const searchForm1 = (ocean,grid) => {

form.addEventListener('keyup', ()=> {
    
    let searchValue = input.value.toLowerCase()


    if(searchValue) {
 
const newArray = ocean.filter((item) =>{
return item.strDrink.toLowerCase().startsWith(searchValue)

})
console.log(newArray);

grid.innerHTML = newArray.map((itemm) => {
    const {idDrink: id, strDrink: Name, strDrinkThumb: images, 
        strIngredient1: ingredient1,  strIngredient2: ingredient2,  strIngredient3: ingredient3} = itemm
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
    }

 else {
        grid.innerHTML = ocean.map((itemm) => {
            const {idDrink: id, strDrink: Name, strDrinkThumb: images, 
                strIngredient1: ingredient1,  strIngredient2: ingredient2,  strIngredient3: ingredient3} = itemm
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



 }
})

}
export default searchForm1