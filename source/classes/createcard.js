
import Modal from "./modal.js"
import VisitCardiologist from "./visitCardiologist.js"
import VisitDentist from "./visitDentist.js"
import VisitTherapist from "./visitTherapist.js"

export class createCard extends Modal {
  constructor() {
    super()
    this._submitButton = document.createElement('input')
    this.select = document.createElement('select')

  }

  createElements() {
    super.createElements()
    this._submitButton.type = 'submit'
    this.select.size = 4;
    this.select.style.outline ="none"
    this.select.style.borderRadius = "5px";
    this.select.style.border = "0.5px solid grey";
    this._submitButton.value = 'Подтвердить';
    this._submitButton.style.backgroundColor = "cadetblue"
    this._mainContainer.append(this.select)
    this.select.insertAdjacentHTML('beforeend', `
  <option disabled>Выберите доктора</option>
  <option value="">Терапевт</option>
  <option value="">Стоматолог</option>
  <option value="">Кардиолог</option>
  `)
    this.select.addEventListener("change", function () {

      const formType = this.options[this.selectedIndex].text;

      const submitForm = document.querySelector('.submit_form')
      if (submitForm) {
        submitForm.remove()
      }
      if (formType === 'Кардиолог') {
        new VisitCardiologist().render('.modal__main-container')

      }
      else if (formType === 'Терапевт') { new VisitTherapist().render('.modal__main-container') }
      else { new VisitDentist().render('.modal__main-container') }

    });
  }
  render(selector) {
    this.createElements();

    document.querySelector(selector).append(this._modalElement);
  }

}

export default createCard



