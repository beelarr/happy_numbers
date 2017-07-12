/**
 * Created by beelarr on 7/11/17.
 */


let testThisNumber = '19';
let splitNum = testThisNumber.split('');
console.log(splitNum);

for (let i = 0; i < splitNum.length; i++){
    splitNum[i] = Number(splitNum[i]);
}
console.log(splitNum);

let squaredValues = [];
let squared;
let i = 0;
while(i < splitNum.length){
    let squared = splitNum[i] * splitNum[i];
    squaredValues.push(squared);
    i++;
}
console.log(squaredValues);

let addTogether = squaredValues[0];
i = 0;
let total;

do {
    total = addTogether + squaredValues[i];
    i++;
}while (i<squaredValues.length);

console.log(total);


