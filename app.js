
const searchBtn = document.getElementById('search-btn').addEventListener('click', function () {

  const searchText = document.getElementById('search-text').value;
  const url = `https://openlibrary.org/search.json?q=${searchText}`
  fetch(url)
    .then(res => res.json())
    .then(data => exploreData(data))

})

const exploreData = data => {
  const books = document.getElementById('books')
  books.textContent = "";
  
  
    for (const docs of data.docs) {
      const div = document.createElement('div');
      div.innerHTML = `
      
        <div class="card h-100" style="width: 18rem;">
  <img src="https://covers.openlibrary.org/b/id/${docs.cover_i}-M.jpg" class="card-img-top w-75" alt="...">
  <div class="card-body">
    <h5 class="card-title">${docs.title}</h5>
    <p> Written by ${docs.author_name}</p>
    <p>First Publish date: ${docs.publish_date[0]}</p>
    <p>Page number: ${docs.number_of_pages_median}</p>

    <p>Publisher: ${docs.publisher[0]}</p>
    
  </div>
</div>
         
        `
      books.appendChild(div);

    }

  }




