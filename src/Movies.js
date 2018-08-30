import React, { Component } from 'react';
import { connect } from "react-redux";

import { changeMovieTitle, searchMovie } from "./store/search-movies";

class MovieUnconnected extends Component {
  state = {movieTitle: ""}

  onChangeMovieTitle = (e) => {
    this.props.changeMovieTitle(e.target.value)
  }

  onPressButton = () => {
    this.props.searchMovie(this.props.movieTitle)
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <input
          type="text"
          placeholder="Titulo de la Peli"
          onChange={this.onChangeMovieTitle}
          value={this.props.movieTitle}
        />
        <button onClick={this.onPressButton} disabled={this.props.areMoviesLoading}>Buscar</button>

        <ul>
          {this.props.movies.map(movie => {
            return <li key={movie.imdbID}>{movie.Title}</li>
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movieTitle: state.searchMovies.movieTitle,
    movies: state.searchMovies.movies,
    areMoviesLoading: state.searchMovies.loading
  }
}

const mapDispatchToProps = {
  changeMovieTitle,
  searchMovie
}

const connection = connect(mapStateToProps, mapDispatchToProps)

export const Movie = connection(MovieUnconnected)
