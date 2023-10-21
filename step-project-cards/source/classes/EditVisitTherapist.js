import Visit from './visit.js';
import changeCardFuncApi from '../functions/changeCardFuncAPI.js'
import Modal from './modal.js';
import refreshCard from '../functions/refreshCard.js';

class EditVisitTherapist extends Visit{
    constructor(cardObj) {
        super();
        this._cardObj = cardObj
        this._modalContainer = new Modal(); 
    }
    
    createElements(){
        super.createElements();
        this.form.classList.add('edit-form')
        this.form.insertAdjacentHTML('beforeend', `
        <label for="age">Возраст</label>
        <input id="age" type="number">`);

        this.submitBtn.addEventListener('click', (event) =>{
            event.preventDefault();
            this.edit()});
        this.submitBtn.value = 'Сохранить данные';
        this.submitBtn.className = 'form__submit-btn'

        this.form.append(this.submitBtn);
        this._modalContainer._mainContainer.append(this.form);
    }

    edit(){
        const urgencySelector = document.querySelector('.visit_select');
        this._cardObj._name = document.querySelector('#name').value;
        this._cardObj._purpose = document.querySelector('#purpose').value;
        this._cardObj._description = document.querySelector('#description').value;
        this._cardObj._urgency = urgencySelector.options[urgencySelector.selectedIndex].text;
        this._cardObj._age = document.querySelector('#age').value;

        changeCardFuncApi(this._cardObj._id, 
                        {id: this._cardObj._id,
                            name: this._cardObj._name,
                            doctor: 'therapist',
                            purpose: this._cardObj._purpose,
                            description: this._cardObj._description,
                            urgency: this._cardObj._urgency,
                            age: this._cardObj._age});

        refreshCard(this._cardObj);
        this._modalContainer.closeModal();
    }

    render(){
        this.createElements();
        this._modalContainer.render('.container');
    }
}

export default EditVisitTherapist;

        /* id,name,doctor,purpose,description,urgency,age */