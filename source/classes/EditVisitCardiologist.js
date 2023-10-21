import Visit from './visit.js';
import changeCardFuncApi from '../functions/changeCardFuncAPI.js'
import Modal from './modal.js';
import refreshCard from '../functions/refreshCard.js';

class EditVisitCardiologist extends Visit{
    constructor(cardObj) {
        super();
        this._cardObj = cardObj
        this._modalContainer = new Modal(); 
    }
    
    createElements(){
        super.createElements();
        this.form.classList.add('edit-form')
        this.form.insertAdjacentHTML('beforeend', `
        <label for="pressure">Ваше обычное давление</label>
        <input id ="pressure" type ="text" value="">
        <label for= "weight">Индекс массы тела</label>
        <input id ="weight" type ="text" value="">
        <label for ="diseases">Перенесенные заболевания сердечно сосудистой системы</label>
        <input id = "diseases" type ="text" value="">
        <label for ="age">Возраст</label>
        <input id ="age"  type ="text" value="">`);

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
        this._cardObj._pressure = document.querySelector('#pressure').value;
        this._cardObj._weight = document.querySelector('#weight').value;
        this._cardObj._disease = document.querySelector('#diseases').value;

        changeCardFuncApi(this._cardObj._id, 
                        {id: this._cardObj._id,
                            doctor: 'cardiologist',
                            name: this._cardObj._name,
                            age: this._cardObj._age,
                            pressure: this._cardObj._pressure,
                            weight: this._cardObj._weight,
                            purpose: this._cardObj._purpose,
                            disease: this._cardObj._disease,
                            description: this._cardObj._description,
                            urgency: this._cardObj._urgency,
                            });

        refreshCard(this._cardObj);
        this._modalContainer.closeModal();
    }

    render(){
        this.createElements();
        this._modalContainer.render('.container');
    }
}

export default EditVisitCardiologist;

 /*        id,name,doctor,purpose,description,urgency,pressure,weight,age,disease */