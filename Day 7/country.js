function print(){
        let country=JSON.parse(this.responseText);
        country.forEach(country => {
            console.log(`Name: ${country.name.common}`);
            console.log(`Capital: ${country.capital}`);
            console.log(`Flag: ${country.flag}`);
            console.log("\n");
        })
    }
    var request=new XMLHttpRequest;
    request.open("GET","https://restcountries.com/v3.1/all");
    request.send();
    request.addEventListener("load",print);
