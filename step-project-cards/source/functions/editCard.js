import EditVisitCardiologist from '../classes/EditVisitCardiologist.js';
import EditVisitDentist from '../classes/EditVisitDentist.js';
import EditVisitTherapist from '../classes/EditVisitTherapist.js'
import getUrgencyIndex from './getUrgencyIndex.js';


function editCard(cardObj) {
    switch (cardObj.doctor.toUpperCase()){
        case 'THERAPIST':
            const editTherapist = new EditVisitTherapist(cardObj);
            editTherapist.render();
            editTherapist.form.querySelector('#name').value = cardObj._name;
            editTherapist.form.querySelector('#purpose').value = cardObj._purpose;
            editTherapist.form.querySelector('#description').value = cardObj._description;
            editTherapist.form.querySelector('.visit_select').selectedIndex = getUrgencyIndex(cardObj._urgency);
            editTherapist.form.querySelector("#age").value = cardObj._age;
            break;
        case 'DENTIST':
            const editDentist = new EditVisitDentist(cardObj);
            editDentist.render();
            editDentist.form.querySelector('#name').value = cardObj._name;
            editDentist.form.querySelector('#purpose').value = cardObj._purpose;
            editDentist.form.querySelector('#description').value = cardObj._description;
            editDentist.form.querySelector('.visit_select').selectedIndex = getUrgencyIndex(cardObj._urgency);
            editDentist.form.querySelector("#visit-date").value = cardObj._dateVisited;
            break;
        case 'CARDIOLOGIST':
            const editCardiologist = new EditVisitCardiologist(cardObj);
            editCardiologist.render();
            editCardiologist.form.querySelector('#name').value = cardObj._name;
            editCardiologist.form.querySelector('#purpose').value = cardObj._purpose;
            editCardiologist.form.querySelector('#description').value = cardObj._description;
            editCardiologist.form.querySelector('.visit_select').selectedIndex = getUrgencyIndex(cardObj._urgency);
            editCardiologist.form.querySelector("#pressure").value = cardObj._pressure;
            editCardiologist.form.querySelector("#weight").value = cardObj._weight;
            editCardiologist.form.querySelector("#diseases").value = cardObj._disease;
            editCardiologist.form.querySelector("#age").value = cardObj._age;
            break;
        default:
            console.log('Sorry! Something went wrong');
            break;
    }
}


export default editCard;