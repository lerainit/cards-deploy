
function getUrgencyIndex (nameOfOption){
    if(nameOfOption === 'обычная') {
        return 1;
    } else if (nameOfOption === 'приоритетная') {
        return 2;
    } else if (nameOfOption === 'неотложная') {
        return 3;
    }
}

export default getUrgencyIndex;