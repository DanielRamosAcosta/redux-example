
const initialState = {
  movieTitle: "",
  loading: false,
  movies: []
}

const ACTION_TYPES = {
  CHANGE_MOVIE_TITLE: 'CHANGE_MOVIE_TITLE',
  SEARCH_MOVIE: 'SEARCH_MOVIE',
  SEARCH_MOVIE_PENDING: 'SEARCH_MOVIE_PENDING',
  SEARCH_MOVIE_FULFILLED: 'SEARCH_MOVIE_FULFILLED',
}

export function searchMoviesReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.CHANGE_MOVIE_TITLE: {
      return {
        ...state,
        movieTitle: action.movieTitle
      }
    }
    case ACTION_TYPES.SEARCH_MOVIE_PENDING: {
      return {
        ...state,
        loading: true
      }
    }
    case ACTION_TYPES.SEARCH_MOVIE_FULFILLED: {
      return {
        ...state,
        movies: state.movies.concat(action.payload),
        loading: false
      }
    }
    default: {
      return state
    }
  }
}

// Action creators
export function changeMovieTitle(movieTitle) {
  return {
    type: ACTION_TYPES.CHANGE_MOVIE_TITLE,
    movieTitle
  }
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))


export function searchMovie(movieTitle) {
  return {
    type: ACTION_TYPES.SEARCH_MOVIE,
    payload: fetch(`http://www.omdbapi.com/?t=${movieTitle}&apikey=PlzBanM3`)
      .then(cosas => sleep(1000).then(() => cosas))
      .then(response => response.json())
  }
}

export function searchMovieFulfilled(movie) {
  return {
    type: ACTION_TYPES.SEARCH_MOVIE_FULFILLED,
    movie
  }
}