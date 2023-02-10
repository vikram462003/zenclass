(function (arr) {
    arr.forEach(function (word) {
        if (word === word.split("").reverse().join("")) {
            console.log(word);
        }
    });
})(["car", "bike", "hello", "world"]);
