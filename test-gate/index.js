const url = "https://jsonplaceholder.typicode.com/posts/?_start=0&_limit=10";
let articlesList = [];
function getArticles() {
  fetch(url, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((response) => response.text())
    .then((result) => showArticles(JSON.parse(result)))
    .catch((error) => console.log("error", error));
}

getArticles();

function showArticles(articles) {
  articlesList = articles;
  articlesList.map((item) => addNewItem(item));
  document
    .querySelectorAll(".article__checkbox")
    .forEach((checkbox) => checkbox.addEventListener("click", changeTheme));
}

function addNewItem(item) {
  const newItem = document.createElement("div");
  newItem.classList.add("article");
  newItem.innerHTML = `
    <h2 class="article__name">${item.title}</h2>
    <p class="article__text">${item.body}</p>
    <input type="checkbox" class="article__checkbox" id="checkbox">`;
  document.querySelector(".articles").append(newItem);
}

function changeTheme() {
  this.parentNode.classList.toggle("article__dark-theme");
}
const form = document.querySelector(".form");
form.addEventListener("submit", getFilterValue);
let searchValue = "";

function getFilterValue(e) {
  e.preventDefault();
  const formData = new FormData(form);
  searchValue = formData.get("search");
  location.hash = searchValue
  filterArticlesList(searchValue);
}

function filterArticlesList(value) {
  const articleNames = document.querySelectorAll(".article__name");
  articleNames.forEach((heading) => {
    if (!heading.textContent.includes(value)) {
      heading.parentNode.style.display = "none";
    } else {
      heading.parentNode.style.display = "grid";
    }
  });
}
