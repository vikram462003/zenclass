(function (arr) {
    var sum = 0;
    arr.forEach(function (num) {
        sum += num;
    });
    console.log(sum);
})([1, 2, 3, 4, 5]);
