fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(data => {
        data.forEach(country => {
            console.log(`Name: ${country.name}`);
            console.log(`Region: ${country.region}`);
            console.log(`Sub-Region: ${country.subregion}`);
            console.log(`Population: ${country.population}`);
            console.log("\n");
        });
    })
    .catch(error => {
        console.error(error);
    });
