import Modal from "./modal.js";


class Visit extends Modal{

  constructor(){
    super()
      this.form = document.createElement('form')
     this.submitBtn = document.createElement('input')
    
   

  }
  createElements(){
    super.createElements()
    this.form.classList.add('submit_form')
     
     this.submitBtn.type = 'submit'
     this._mainContainer.append(this.form)  

this.form.insertAdjacentHTML('beforeend',`
      <input type="text" id="purpose" placeholder="Цель визита" value=""><br>
   
       <input type="text" id="description" placeholder="Краткое описание визита" value=""><br>
     <select class = "visit_select" size = "4"> <option disabled>Cрочность визита</option>
     <option value="">обычная</option>
    <option value="">приортетная</option>
    <option value="">неотложная</option></select><br>
     
      <input type="text" id = "name" placeholder="ФИО" value=""><br>`)
 
  }

render(selector){
  this.createElements();
  
  document.querySelector(selector).append(this.form);
}
}

export default Visit;

