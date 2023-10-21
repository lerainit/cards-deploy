import Card from "./card.js";

import instance from "../functions/instance.js";

class CardforDentist extends Card {

    constructor(id, name, doctor, purpose, description, urgency, datevisited) {

        super(id, name, doctor, purpose, description, urgency)
        this._dateVisited = datevisited;
    }

    createElements() {
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
    <li><span>Дата последнего визита:</span>${this._dateVisited}</li>
`)
    
         document.querySelectorAll('.card_container').forEach(el =>el.style.height = '170px' )
    this.cardContainer.style.height = '350px'
    })

    }
    render(selector) {
        this.createElements()


        document.querySelector(selector).append(this.cardContainer)
    }



}

export default CardforDentist
