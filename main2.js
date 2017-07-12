/**
 * Created by beelarr on 7/11/17.
 */


let spiltValues = function (value) {
    let arrayOfNumbers = value.split('');
    for (let i = 0; i < arrayOfNumbers.length; i++){
        arrayOfNumbers[i] = Number(arrayOfNumbers[i]);
    }
    return arrayOfNumbers;
};

console.log(spiltValues('19'));



let squareAndAdd = function (passedValue) {
    let processedVals = [];

    let i = 0;
    while (i < passedValue.length){
        let squared = passedValue[i] * passedValue[i];
        processedVals.push(squared);
        i++;
    }
    let allTogether = 0;
    for (let i = 0; i < processedVals.length; i++){
        allTogether = allTogether + processedVals[i];
    }
    return allTogether
};

function checkHappy(passedValue) {
    if (passedValue === 1 || passedValue === 7){
        console.log(testThisNumber, 'is happy');
    }else{
        let checkDigits = passedValue.toString();
        if (checkDigits.length === 1){
            console.log(testThisNumber, "is sad");
        }else{
            checkDigits = spiltValues(checkDigits);
            let newNumber = squareAndAdd(checkDigits);
            checkHappy(newNumber);
        }
    }
}


let button = document.getElementById('btn-checkvalue');
let testThisNumber;

button.addEventListener('click', function () {
    testThisNumber = document.getElementById('numberVal').value;
    let testThis = checkHappy(squareAndAdd(spiltValues(testThisNumber)))
} );