import Card from "../classes/card.js"
import createLogin from "./createLogin.js"
import createCards from "./createCards.js"
import Filter from "../classes/filter.js"
import CardforCardiologist from "../classes/cardForCardiologist.js"
import CardforDentist from "../classes/cardforDentist.js"
import CardforTherapist from "../classes/cardforTherapist.js"
import filterCards from "./filterFuction.js"

function renderCardsAfterReload() {
  let cardsArr = JSON.parse(localStorage.getItem('cards'))

  console.log(cardsArr)
  if(cardsArr.length === 0 ){
    document.querySelector('.container').insertAdjacentHTML('beforeend','<h1>No items added</h1>')}else{
      document.querySelector('h1').remove()
    }
   
  cardsArr.forEach(el => {

    if (el.doctor === 'cardiologist') {
      new CardforCardiologist(el.id, el.name, el.doctor, el.purpose, el.description, el.urgency, el.pressure, el.weight, el.age, el.disease).render('.container')
    }
    else if (el.doctor === 'therapist') {
      new CardforTherapist(el.id, el.name, el.doctor, el.purpose, el.description, el.urgency, el.age).render('.container')
    }
   else  {

     new CardforDentist(el.id, el.name, el.doctor, el.purpose, el.description, el.urgency, el.lastvisitdate).render('.container')
    }
  })

  const loginBtn = document.querySelector('.login_btn')
  loginBtn.innerHTML = 'Cоздать новую карту'
  loginBtn.removeEventListener('click', createLogin)

  loginBtn.addEventListener('click', createCards)

  const filter = new Filter()
  filter.render('.filter_container2')
  document.querySelector('.filter_container2').addEventListener('input', () => {

    filterCards()

  })

}

export default renderCardsAfterReload
