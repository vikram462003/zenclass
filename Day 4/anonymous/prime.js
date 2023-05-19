(function (arr) {
    arr.forEach(function (num) {
        var isPrime = true;
        for (var i = 2; i <= num / 2; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(num);
        }
    });
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
