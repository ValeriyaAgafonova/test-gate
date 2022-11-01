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

  getArticles()

function showArticles(articles){
    articlesList = articles
    articlesList.map(item => addNewItem(item))
}


  function addNewItem(item){
    const newItem = document.createElement('div')
    newItem.classList.add('article')
    newItem.innerHTML = `
    <h2 class="article__name">${item.title}</h2>
    <p class="article__text">${item.body}</p>
    <input type="checkbox" class="article__checkbox" id="checkbox">`
document.querySelector('body').append(newItem)
  }

