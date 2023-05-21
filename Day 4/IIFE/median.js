(function (arr1, arr2) {
    var combinedArray = arr1.concat(arr2).sort(function (a, b) {
        return a - b;
    });
    var middleIndex = Math.floor(combinedArray.length / 2);
    console.log(combinedArray[middleIndex]);
})([1, 3, 5], [2, 4, 6]);
