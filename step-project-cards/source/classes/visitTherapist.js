import Visit from './visit.js'
import postNewCards from '../functions/postCardFunc.js';

class VisitTherapist extends Visit{
    constructor() {
        super();
        this.submitBtn = document.createElement('button');
    }

    createElements() {
        super.createElements();
        this.submitBtn.innerHTML = 'Создать визит';
        this.submitBtn.classList.add('btn_for_therapist');
        this.form.insertAdjacentHTML('beforeend', `
        <label for="age">Возраст</label>><br>
        <input id="age" type="number">><br>`);
        this.submitBtn.addEventListener('click', (event) =>{
            event.preventDefault();
            this.postCard()});
        this.form.append(this.submitBtn);
    }

    postCard() {
        const urgencySelector = document.querySelector('.visit_select');
        postNewCards({doctor:'therapist',
                        name:document.querySelector('#name').value,
                        purpose:document.querySelector('#purpose').value,
                        description:document.querySelector('#description').value,
                        urgency: urgencySelector.options[urgencySelector.selectedIndex]?.text,
                        age:document.querySelector("#age").value});

        document.querySelector('.modal').remove();
    }
}

export default VisitTherapist;
