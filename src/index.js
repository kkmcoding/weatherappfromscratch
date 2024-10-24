function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-field");
  let city = document.querySelector("#city");
  if (searchInput.value) {
    city.innerHTML = `${searchInput.value}`;
  } else {
    city.innerHTML = null;
    alert("Please type a city");
  }
}
let searchFormInput = document.querySelector("#search-form");
searchFormInput.addEventListener("submit", search);
