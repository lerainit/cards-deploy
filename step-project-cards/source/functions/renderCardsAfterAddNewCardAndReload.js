const renderAfterReloadwithAddedCard = () => {

    let newCardArr = localStorage.getItem('newcard')

    
    let newCardObj = JSON.parse(newCardArr)

    console.log(newCardObj)

    let cards = localStorage.getItem('cards')
    let cardsArr = JSON.parse(cards)

    let newCardsArr = cardsArr.push(newCardObj)

    
    const newCardsArrJSon = JSON.stringify(cardsArr)

    localStorage.setItem('cards', newCardsArrJSon)
 const emptyTitle = document.querySelector('h1')
if(emptyTitle){emptyTitle.remove()}
}

export default renderAfterReloadwithAddedCard
