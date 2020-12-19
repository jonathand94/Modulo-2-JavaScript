
function isPrime(number){
    prime_limit_check = Math.round(number / 2);
    if (number <= 1){
        return false;
    }
    else if (number <= 3){
        return true;
    }
    for(let i=2; i<=prime_limit_check; i++){
        if(number % i === 0){
            return false;
        }
    }
    return true;
}

function getPrimeNumbers(upperLimitNumber){
    primes = [];
    for(let i=0; i <= upperLimitNumber; i++){
        if (isPrime(i)){
            primes.push(i);
        }
    }
    return primes;
}

console.log(getPrimeNumbers(400));