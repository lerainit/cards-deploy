import CardforCardiologist from "../classes/cardForCardiologist.js"
import CardforDentist from "../classes/cardforDentist.js"
import CardforTherapist from "../classes/cardforTherapist.js"

const filterCards = () =>{
let target = event.target

const cardsForFilter = JSON.parse(localStorage.getItem('cards'))

let filteredCards;

filteredCards =cardsForFilter.filter(({doctor,name,description,urgency,purpose}) =>doctor.includes(target.value) || name.includes(target.value) || urgency.includes(target.value) || description.includes(target.value) || purpose.includes(target.value))


const container = document.querySelector('.container')
container.innerHTML = ''

filteredCards.forEach(el =>{
    if(el.doctor === 'cardiologist'){
    new CardforCardiologist(el.id,el.name,el.doctor,el.purpose,el.description,el.urgency,el.pressure,el.weight,el.age,el.disease).render('.container')}
   else if(el.doctor ==='dentist'){
     new CardforDentist(el.id,el.name,el.doctor,el.purpose,el.description,el.urgency,el.lastVisitDate).render('.container')
   }
   else{

    new CardforTherapist(el.id,el.name,el.doctor,el.purpose,el.description,el.urgency,el.age).render('.container') 
   }
   }
 )

if(target.value === ''){
  document.querySelector('.container').innerHTML = ''
    cardsForFilter.forEach(el =>{
        if(el.doctor === 'cardiologist'){
        new CardforCardiologist(el.id,el.name,el.doctor,el.purpose,el.description,el.urgency,el.pressure,el.weight,el.age,el.disease).render('.container')}
       else if(el.doctor ==='dentist'){
         new CardforDentist(el.id,el.name,el.doctor,el.purpose,el.description,el.urgency,el.lastVisitDate).render('.container')
       }
       else{
        new CardforTherapist(el.id,el.name,el.doctor,el.purpose,el.description,el.urgency,el.age).render('.container') 
       }
       }
     )
}


}

export default  filterCards;
