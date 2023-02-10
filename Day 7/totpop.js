fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(countries => {
        let totalPopulation = countries.reduce((acc, country) => acc + country.population, 0);
        console.log(`Total population: ${totalPopulation}`);
    });