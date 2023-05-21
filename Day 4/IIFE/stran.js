(function (arr) {
    arr.forEach(function (str) {
        console.log(str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
    });
})(["foo", "bar", "baz"]);