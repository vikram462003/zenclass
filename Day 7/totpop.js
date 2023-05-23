function print(){
    let country=JSON.parse(this.responseText);
    let totalpopulation=country.reduce((acc, country) => acc + country.population, 0);
    console.log(totalpopulation);
 }
 var request=new XMLHttpRequest;
 request.open("GET","https://restcountries.com/v3.1/all");
 request.send();
 request.addEventListener("load",print); 