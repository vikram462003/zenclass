var fun1=function (arr) {
    arr.forEach(function (str) {
        console.log(str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
    });
}
fun1(["foo", "bar", "baz"])