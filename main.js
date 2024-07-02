/*
Checking if a number is prime

*/
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    var isPrime = true;
    for (var div = 2; div < num; div++) {
        if (num % div == 0) {
            isPrime = false;
            break;
        }
    }
    return isPrime;
}
console.log(isPrime(13));
