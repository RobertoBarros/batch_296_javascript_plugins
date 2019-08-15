const list = document.querySelector('#results');

const insertMovies = (data) => {
  data.Search.forEach((result) => {
    const movie = `<li class='list-inline-item mt-3'>
      <img src="${result.Poster}" alt="" style="height: 200px; width: 135px;" />
    </li>`;
    list.insertAdjacentHTML('beforeend', movie);
  });
};

const fetchMovies = (query) => {
  list.innerHTML = '';
  fetch(`http://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`)
    .then(response => response.json())
    .then(insertMovies);
};

const showResults = (event) => {
  event.preventDefault();
  const input = document.querySelector('#search-input');
  fetchMovies(input.value);
}

export { fetchMovies, showResults };




