function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')  // this a promise.
  .then(resp => resp.json() )  // receives a response and processes it and then returns/converts content of response to JSON data.
  .then(json => renderBooks(json))  // do this to the JSON data. console.log(json) will print out in the console.
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
