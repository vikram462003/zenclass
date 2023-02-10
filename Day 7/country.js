fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(countries => {
        countries.forEach(country => {
            console.log(`Name: ${country.name.common}`);
            console.log(`Capital: ${country.capital}`);
            console.log(`Flag: ${country.flag}`);
            console.log("\n");
        });
    });
