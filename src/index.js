function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    if (searchInput) {
        let cityElement = document.querySelector("#city");
        cityElement.innerHTML = searchInput.value;
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


