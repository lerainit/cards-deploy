function changeCardStorage(newData) {
    const cards = JSON.parse(localStorage.getItem('cards'));
    cards.splice(cards.findIndex((element) => element.id === newData.id), 1, newData);
    localStorage.setItem('cards', JSON.stringify(cards));
}

export default changeCardStorage;