let values = ['2','3','4','5','6','7','8','9','10','V','D','R','A']
let colors = ['C', 'P', 'Q', 'T']

function listCards(values, colors) {
    let listCard = [];

    for (let i = 0; i < colors.length; i++) {
        for (let j = 0; j < values.length; j++) {
           listCard.push(colors[i]+values[j]);
        }
    }
    return listCard;
}

function missingCards(input) {
    let newInput = input.split(' ');
    let array = listCards(values, colors);

    for (let i = 0; i < newInput.length; i++) {
        for(let j=0; j< array.length; j++){
            if(newInput[i]==array[j]){
                array.splice(j,1)
            }
        }
    }
    return array;
}