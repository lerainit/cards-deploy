import CardforCardiologist from "./cardForCardiologist.js"
import CardforDentist from "./cardforDentist.js"
import CardforTherapist from "./cardforTherapist.js"

class Filter {

    constructor() {


        this.filterContainer = document.createElement('div')
        this.filterForm = document.createElement('form')
        this.filterBtn = document.createElement('button')
        this.filterSelect = document.createElement('select')
        this.filterLabel = document.createElement('label')
        this.filterInput = document.createElement('input')
    }

    createElements() {
        this.filterContainer.classList.add('filter_container')
        this.filterBtn.innerHTML = 'Фильтр'
        this.filterBtn.classList.add('filter_btn')
        this.filterContainer.append(this.filterBtn)
        this.filterForm.classList.add('filter_form')
        this.filterSelect.classList.add('filter_select')
        this.filterSelect.size = "4"
        this.filterSelect.style.outline ="none"
        this.filterSelect.style.borderRadius ="5px"
        this.filterLabel.for = 'filter'
        this.filterLabel.innerHTML = 'Поиск'
        this.filterInput.type = 'text'
        this.filterInput.id = 'filter'
        this.filterInput.value = ''
        this.filterForm.append(this.filterLabel)
        this.filterForm.append(this.filterInput)

        
        this.filterBtn.addEventListener('click', () => {
            this.filterForm.append(this.filterSelect)
            this.filterSelect.innerHTML = ''
            this.filterSelect.insertAdjacentHTML('beforeend', `  <option disabled>Cрочность визита</option>
        <option value="">обычная</option>
       <option value="">приортетная</option>
       <option value="">неотложная</option><br>`)

        })
        this.filterSelect.addEventListener('change', () => {


            const cardsForFilterSelect = JSON.parse(localStorage.getItem('cards'))
            console.log(cardsForFilterSelect)



            let urgencySelect = document.querySelector('.filter_select')

            let filteredCards = cardsForFilterSelect.filter(({ urgency }) => urgency.includes(urgencySelect.options[urgencySelect.selectedIndex].text))
            console.log(filteredCards)

            const container = document.querySelector('.container')
            container.innerHTML = ''
            filteredCards.forEach(el =>{  if(el.doctor === 'cardiologist'){
                new CardforCardiologist(el.id,el.name,el.doctor,el.purpose,el.description,el.urgency,el.pressure,el.weight,el.age,el.disease).render('.container')}
               else if(el.doctor ==='dentist'){
                 new CardforDentist(el.id,el.name,el.doctor,el.purpose,el.description,el.urgency,el.lastVisitDate).render('.container')
               }
               else{
            
                new CardforTherapist(el.id,el.name,el.doctor,el.purpose,el.description,el.urgency,el.age).render('.container') 
               }})
            document.querySelector('.container').addEventListener('click', (e) => {
                 let filterCard = document.querySelector('.container')
                 
                 if(e.target === filterCard){
                
                document.querySelector('.container').innerHTML = ''
                let cardsForRenderFilter = JSON.parse(localStorage.getItem('cards'))
                cardsForRenderFilter.forEach(el => { if(el.doctor === 'cardiologist'){
                    new CardforCardiologist(el.id,el.name,el.doctor,el.purpose,el.description,el.urgency,el.pressure,el.weight,el.age,el.disease).render('.container')}
                   else if(el.doctor ==='dentist'){
                     new CardforDentist(el.id,el.name,el.doctor,el.purpose,el.description,el.urgency,el.lastVisitDate).render('.container')
                   }
                   else{
                
                    new CardforTherapist(el.id,el.name,el.doctor,el.purpose,el.description,el.urgency,el.age).render('.container') 
                   }})
                }
            })
           
        })

 this.filterContainer.append(this.filterForm)

    }
    render(selector) {

        this.createElements()
        document.querySelector(selector).append(this.filterContainer)


    }


}
export default Filter
