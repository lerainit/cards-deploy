import Card from "./card.js";



class CardforCardiologist extends Card{

constructor(id,name,doctor,purpose,description,urgency,pressure,weight,age,disease){

    super(id,name,doctor,purpose,description,urgency)
this._pressure = pressure;
this._weight = weight;
this._age = age;
this._disease =disease;


}

createElements(){
super.createElements();

this.showMoreBtn.addEventListener('click',()=>{

    const showMore = document.querySelector('.show_more')
    if(showMore){showMore.remove()
     this.ul.innerHTML = ''   
    }
    this.cardContainer.append(this.ul)
    
       this.ul.insertAdjacentHTML('beforeend',`
    
    <li><span>Цель визита:</span>${this._purpose}</li>
    <li><span>Краткое описание визита:</span>${this._description}</li>
    <li><span>Срочность:</span>${this._urgency}</li>
<li><span>Обычное давление:</span>${this._pressure}</li>
<li><span>Индекс массы тела:</span>${this._weight}</li>
<li><span>Возраст:</span>${this._age}</li>
<li><span>Перенесеные заболевания:</span>${this._disease}</li>
`)
    
        
       document.querySelectorAll('.card_container').forEach(el =>el.style.height = '170px' )
    this.cardContainer.style.height = '350px'
    })


}
render(selector){
    this.createElements()


document.querySelector(selector).append(this.cardContainer)
}



}

export default CardforCardiologist