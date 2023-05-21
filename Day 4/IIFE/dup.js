(function (arr) {
    var uniqueArray = [];
    arr.forEach(function (item) {
        if (uniqueArray.indexOf(item) === -1) {
            uniqueArray.push(item);
        }
    });
    console.log(uniqueArray);
})([1, 2, 3, 4, 5, 1, 2, 3]);
