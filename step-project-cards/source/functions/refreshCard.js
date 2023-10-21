function refreshCard (cardObj) {
    const cardUl = cardObj.cardContainer.querySelector('ul');
    cardUl.innerHTML = "";
    cardUl.insertAdjacentHTML('beforeend',`
        <li><span>ФИО:</span>${cardObj._name}</li>
        <li><span>Доктор:</span>${cardObj.doctor}</li>
    `);

    const showMore = cardObj.cardContainer.querySelector('.show_more');
    if (showMore) {
        showMore.innerHTML = "";
        switch (cardObj.doctor.toUpperCase()){
            case 'THERAPIST':
                showMore.insertAdjacentHTML('beforeend',`
                    <li><span>Цель визита:</span>${cardObj._purpose}</li>
                    <li><span>Краткое описание визита:</span>${cardObj._description}</li>
                    <li><span>Срочность:</span>${cardObj._urgency}</li>
                    <li><span>Дата последнего визита:</span>${cardObj._age}</li>`);
                break;
            case 'DENTIST':
                showMore.insertAdjacentHTML('beforeend',`
                    <li><span>Цель визита:</span>${cardObj._purpose}</li>
                    <li><span>Краткое описание визита:</span>${cardObj._description}</li>
                    <li><span>Срочность:</span>${cardObj._urgency}</li>
                    <li><span>Дата последнего визита:</span>${cardObj._dateVisited}</li>`);
                break;
            case 'CARDIOLOGIST':
                showMore.insertAdjacentHTML('beforeend',`
                    <li><span>Цель визита:</span>${cardObj._purpose}</li>
                    <li><span>Краткое описание визита:</span>${cardObj._description}</li>
                    <li><span>Срочность:</span>${cardObj._urgency}</li>
                    <li><span>Обычное давление:</span>${cardObj._pressure}</li>
                    <li><span>Индекс массы тела:</span>${cardObj._weight}</li>
                    <li><span>Возраст:</span>${cardObj._age}</li>
                    <li><span>Перенесеные заболевания:</span>${cardObj._disease}</li>`);
                break;
            default:
                console.log('Sorry! Something went wrong');
                break;
        }
    }
}

export default refreshCard;