import Visit from "./visit.js";
import postNewCards from "../functions/postCardFunc.js";


class VisitCardiologist extends Visit{
constructor(){
    super()
this.submitBtn = document.createElement('button')
}
createElements(){
    super.createElements()
    this.submitBtn.innerHTML = 'Создать визит'
this.submitBtn.classList.add('btn_for_cardiologist')
   this.form.insertAdjacentHTML('beforeend',`
   <label for="pressure">Ваше обычное давление</label><br>
   <input id ="pressure" type ="text" value=""><br>
   <label for= "weight">Индекс массы тела</label><br>
   <input id ="weight" type ="text" value=""><br>
   <label for ="diseases">Перенесенные заболевания сердечно сосудистой системы</label><br>
   <input  id = "diseases" type ="text" value=""><br>
   <label for ="age">Возраст</label><br>
   <input id ="age"  type ="text" value=""><br>
   `)
this.form.append(this.submitBtn)
this.form.addEventListener('submit',(e)=>{
e.preventDefault()



let urgencyPost

   document.querySelector('.visit_select').selectedIndex 

 
   if (document.querySelector('.visit_select').selectedIndex === 1){
    urgencyPost = 'обычная'
 }else if(document.querySelector('.visit_select').selectedIndex === 2){
    urgencyPost = 'приоритетная'
 }else{ urgencyPost = 'неотложная'}

  
  postNewCards({doctor:'cardiologist',name:document.querySelector('#name').value,age:document.querySelector('#age').value,pressure:document.querySelector('#pressure').value,weight:document.querySelector('#weight').value,purpose:document.querySelector('#purpose').value,disease:document.querySelector('#diseases').value,description:document.querySelector('#description').value,urgency: urgencyPost }) 
     document.querySelector('.modal').remove()
     
    
      })
  
}


render(selector){
    this.createElements()
    document.querySelector(selector).append(this.form);
}

}

export default VisitCardiologist
