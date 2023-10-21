
import deleteCardFuncAPI from "../functions/deleteCardFuncAPI.js";
import EditVisitCardiologist from "./EditVisitCardiologist.js";
import editCard from "../functions/editCard.js";

class Card{
constructor(id,name,doctor,purpose,description,urgency){
this._purpose = purpose;
this._id = id
this._description = description;
this._name = name;
this.doctor = doctor;
this._urgency = urgency;
this.cardContainer = document.createElement('div')
this.showMoreBtn = document.createElement('button')
this.deleteBtn = document.createElement('button')
this.editBtn = document.createElement('button')
this.ul = document.createElement('ul')
  

    
}
createElements(){
   
this.cardContainer.classList.add('card_container')
this.cardContainer.draggable = 'true'
this.showMoreBtn.classList.add('show_btn')
this.deleteBtn.classList.add('delete_btn')
this.editBtn.classList.add('edit_btn')
this.showMoreBtn.innerHTML ='Показать больше'
this.deleteBtn.innerHTML = 'Удалить'
this.editBtn.innerHTML = 'Редактировать'
this.ul.classList.add('show_more')
   
this.cardContainer.append(this.editBtn)
this.cardContainer.append(this.deleteBtn)

this.cardContainer.insertAdjacentHTML('beforeend',`
<ul>
<li><span>ФИО:</span>${this._name}</li>
<li><span>Доктор:</span>${this.doctor}</li>
</ul>
`)

this.cardContainer.append(this.showMoreBtn)
this.editBtn.addEventListener('click',() =>{
  
    editCard(this)

})
  this.deleteBtn.addEventListener('click',()=>{
    deleteCardFuncAPI(this)
   })
}
deleteCards(){

this.cardContainer.remove()
let cardsArr = JSON.parse(localStorage.getItem('cards'))
if(cardsArr.length === 0 ){
  document.querySelector('.container').insertAdjacentHTML('beforeend','<h1>No items added</h1>')}
  else{
    document.querySelector('h1').remove()
  }
}
render(selector){
this.createElements()


document.querySelector(selector).append(this.cardContainer)

}
    
}





export default Card;
