
function getEvenNumbersWhile(upperLimitNumber){
    counter = 0;
    evenNumbers = [];
    while(counter<=upperLimitNumber){
        if(counter%2 === 0) evenNumbers.push(counter);
        counter++; 
    }
    evenNumbers.sort();
    return evenNumbers;
}

function getEvenNumbersFor(upperLimitNumber){
    evenNumbers = [];
    for(i=0; i<=upperLimitNumber; i++){
        if(i%2 === 0) evenNumbers.push(i); 
    }
    return evenNumbers;
}

// Test results
console.log(getEvenNumbersFor(100));
console.log(getEvenNumbersWhile(100));
