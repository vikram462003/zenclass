var printodd=function(arr){
    arr.forEach(num => {
        if(num%2!==0)
            console.log(num);
    });
}
var array=[1,2,3,4,5,6,7,8,9];
printodd(array);