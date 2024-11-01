function searchCity(city) {
    let apiKey = "38ceca6c8obf3e60a0794bbb2d9at245";
    let apiUrl = 'https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unit= metric';
    console.log(apiUrl);
}

function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    if (searchInput) {
        let cityElement = document.querySelector("#city");
        cityElement.innerHTML = searchInput.value;
        searchCity(searchInput.value);
    } else {
        console.error("Input element with ID 'search-form-input' not found.");
    }
}

let searchElement = document.querySelector("#search-form");
if (searchElement) {
    searchElement.addEventListener("submit", handleSearchSubmit);
} else {
    console.error("Search form element not found.");
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit",handleSearchSubmit);


