var pal=function (arr) {
    arr.forEach(function (word) {
        if (word === word.split("").reverse().join("")) {
            console.log(word);
        }
    });
}
pal(["car", "bike", "hello", "world","civic"])