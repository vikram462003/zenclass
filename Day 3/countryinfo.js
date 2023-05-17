function printData() {
    const countries = JSON.parse(this.responseText);
    countries.forEach((coun) => console.log(`
    Name: ${coun.name.common}
    region:${coun.region}
    subregion:${coun.subregion}
    Population:${coun.population}
    `));
  }
  
  var request = new XMLHttpRequest();
  request.addEventListener("load", printData);
  request.open("GET", "https://restcountries.com/v3.1/all");
  request.send(); 