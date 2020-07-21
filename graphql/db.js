import fetch from "node-fetch";

const API_URL = "https://yts.mx/api/v2/list_movies.json?";
let Movies = [];

export const getMovies = (limit, rating) => {
    let REQUEST_URL = API_URL;
    if (limit > 0) {
        REQUEST_URL += `limit=${limit}`;
    }
    if (rating > 0) {
        REQUEST_URL += `&minimum_rating=${rating}`;
    }
    Movies = fetch(REQUEST_URL)
        .then((res) => res.json())
        .then((json) => json.data.movies);

    return Movies;
};

export const getMovie = async (id) => {
    const shapedMovies = await Movies.then((movies) => movies.filter((movie) => movie.id === id));
    if (shapedMovies.length > 0) {
        return shapedMovies[0];
    } else {
        return null;
    }
};
