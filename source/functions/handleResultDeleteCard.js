import deleteCardStorage from './deleteCardStorage.js';

function handleResultDeleteCard(cardObj) {
    deleteCardStorage(cardObj._id);
    cardObj.deleteCards();
}

export default handleResultDeleteCard;