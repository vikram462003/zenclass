fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(data => {
        console.log(data.filter(country => country.population < 200000));
    })
    .catch(error => {
        console.error("An error occurred:", error);
    });