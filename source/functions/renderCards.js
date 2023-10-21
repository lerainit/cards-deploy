import getCards from "./getCards.js";
import Card from "../classes/card.js";
import Filter from "../classes/filter.js";
import filterCards from "./filterFuction.js";
import CardforCardiologist from "../classes/cardForCardiologist.js";
import CardforDentist from "../classes/cardforDentist.js";
import CardforTherapist from "../classes/cardforTherapist.js";


const renderCards = () => {
  const result = async () => {

 const data = await getCards()

  return data
  }
  let cardsArr = result()

  cardsArr.then(result => {

    if(result.length === 0 ){
      document.querySelector('.container').insertAdjacentHTML('beforeend','<h1>No items added</h1>')}else{
        document.querySelector('.container').innerHTML = ''
      }
    console.log(result)

    result.forEach(el => {
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

})

  const filter = new Filter()
  filter.render('.filter_container2')
  document.querySelector('.filter_container2').addEventListener('input', () => {
    
    filterCards()

  })

  return cardsArr
}
export default renderCards
