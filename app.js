// TMBD API
const API_KEY = 'api_key=1c68400131c8854ba12842985958c91e';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = `${BASE_URL}/discover/movie?sort_by=popularity.desc&${API_KEY}`;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const SEARCH_URL = `${BASE_URL}/search/movie?${API_KEY}`;

const movieMain = document.querySelector('.movie-main');
const movieForm = document.querySelector('.movie-form');
const searchBar = document.querySelector('.search-bar');

getMovies(API_URL);

function getMovies(url) {
	fetch(url).then(res => res.json()).then(data => {
		showMovies(data.results);
	})
};

function showMovies(data) {
	movieMain.innerHTML = '';

	data.forEach(movie => {
		const { title, poster_path, vote_average, overview } = movie;
		const movieEl = document.createElement('div');
		movieEl.classList.add('movie');
		movieEl.innerHTML = `
			<img src="${IMG_URL + poster_path}" alt="${title}" class="movie-img">

				<div class="movie-info">
					<h3 class="movie-title">${title}</h3>
					<span class="movie-rating ${getColor(vote_average)}">${vote_average}</span>
				</div>

				<div class="movie-description">
					<h3 class="movie-title movie-subtitle">Overview</h3>
					${overview}
				</div>

		`
		movieMain.appendChild(movieEl);
	});

}

function getColor(vote) {
	if (vote >= 8) {
		return 'green'
	} else if (vote >= 5) {
		return 'orange'
	}
	return 'red'
}

movieForm.addEventListener('submit', (el) => {

	el.preventDefault();

	const searchTerm = searchBar.value;
	if (searchTerm) {
		getMovies(`${SEARCH_URL}&query=${searchTerm}`);
	}
	getMovies(API_URL);
});

// Set the cursor position of the "input" element to the end when the page loads
function setCaretPosition(ctrl, pos) {
	// Modern browsers
	if (ctrl.setSelectionRange) {
		ctrl.focus();
		ctrl.setSelectionRange(pos, pos);
	}
};

const input = document.querySelector('.search-bar');
setCaretPosition(input, input.value.length);