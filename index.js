function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')  // a promise
  .then(resp => resp.json() )  // receives a response & processes it & returns/converts content of response to JSON data
  .then(json => renderBooks(json))  // do this to the JSON data. console.log(json) will print out in console. can call another fx/meth on it: renderBooks(json)
}

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})