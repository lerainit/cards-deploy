import Visit from './visit.js'
import postNewCards from '../functions/postCardFunc.js';

class VisitDentist extends Visit{
    constructor() {
        super();
        this.submitBtn = document.createElement('button');
    }

    createElements() {
        super.createElements();
        this.submitBtn.innerHTML = 'Создать визит';
        this.submitBtn.classList.add('btn_for_dentist');
        this.form.insertAdjacentHTML('beforeend', `
        <label for="visit-date">Дата последнего посещения</label>><br>
        <input id="visit-date" type="date">><br>`);
        this.submitBtn.addEventListener('click', (event) =>{
            event.preventDefault();
            this.postCard()});
        this.form.append(this.submitBtn);
    }

    postCard() {
        const urgencySelector = document.querySelector('.visit_select');
        postNewCards({doctor: 'dentist',
                        name: document.querySelector('#name').value,
                        purpose: document.querySelector('#purpose').value,
                        description: document.querySelector('#description').value,
                        urgency: urgencySelector.options[urgencySelector.selectedIndex].text,
                        lastvisitdate: document.querySelector('#visit-date').value});

        document.querySelector('.modal').remove();
    }
}

export default VisitDentist;
