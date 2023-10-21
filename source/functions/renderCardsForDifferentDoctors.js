import CardforDentist from "../classes/cardforDentist.js";
import CardforCardiologist from "../classes/cardForCardiologist.js";
import CardforTherapist from "../classes/cardforTherapist.js";

const renderCardForDifferentDoctors = (el) =>{


  if (el.doctor === 'cardiologist') {
    new CardforCardiologist(el.id, el.name, el.doctor, el.purpose, el.description, el.urgency, el.pressure, el.weight, el.age, el.disease).render('.container')
  }
  else if (el.doctor === 'therapist') {
    new CardforTherapist(el.id, el.name, el.doctor, el.purpose, el.description, el.urgency, el.age).render('.container')
  }
 else  {

   new CardforDentist(el.id, el.name, el.doctor, el.purpose, el.description, el.urgency, el.lastvisitdate).render('.container')
  }
   
   }
 


export default renderCardForDifferentDoctors;
