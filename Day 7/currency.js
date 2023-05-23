function print(){
    let country=JSON.parse(this.responseText);
    let filtered=country.filter(coun=>coun.currencies=="USD");
    console.log(filtered);
}
var request=new XMLHttpRequest;
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.addEventListener("load",print);