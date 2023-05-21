var dup=function (arr) {
    var uniqueArray = [];
    arr.forEach(function (item) {
        if (uniqueArray.indexOf(item) === -1) {
            uniqueArray.push(item);
        }
    });
    console.log(uniqueArray);
}
dup([10,10,32,34,24,54,32,34]);
