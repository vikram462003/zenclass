(function (arr, k) {
    for (var i = 0; i < k; i++) {
        arr.unshift(arr.pop());
    }
    console.log(arr);
})([1, 2, 3, 4, 5], 2);