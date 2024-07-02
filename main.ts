/*
Checking if a number is prime

*/

function isPrime(num: number): boolean {
    if(num <= 1) {
        return false;    
    }

    let isPrime = true;

    for(let div = 2; div < num; div ++) {
        if(num % div == 0) {
            isPrime = false;
            break;
        }
    }
    return isPrime;
}
console.log(isPrime(13))
