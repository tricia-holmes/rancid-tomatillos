import "./App.css";
import React from "react";
import Banner from "../Banner/Banner";
import Movies from "../Movies/Movies";
import MovieDetails from "../MovieDetails/MovieDetails";
import Error from "../Error/Error";
import { Route } from "react-router-dom";
import { loadData } from "../Util/ApiCalls";
import SearchBar from "../SearchBar/SearchBar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      moviesWithDetails: [],
      filteredMovies: [],
      loading: true,
      hasError: false,
      search: "",
    };
  }

  componentDidMount = () => {
    loadData("https://rancid-tomatillos.herokuapp.com/api/v2/movies", this);
  };

  handleSearch = (event) => {
    this.setState({ search: event.target.value });
    this.searchMovies();
    if (event.target.value === "") {
      this.setState({ filteredMovies: [...this.state.movies] });
    }
  };

  searchMovies = () => {
    const foundMovies = this.state.moviesWithDetails.reduce((acc, movie) => {
      if (movie.title) {
        if (
          `${movie.title}`
            .toLowerCase()
            .includes(`${this.state.search.toLowerCase()}`)
        ) {
          acc.push(movie);
        }
      }
      if (movie.genres) {
        movie.genres.forEach((item) => {
          if (item.toLowerCase().includes(this.state.search.toLowerCase())) {
            acc.push(movie);
          }
        });
      }

      return acc.filter((item, index) => acc.indexOf(item) === index);
    }, []);
    this.setState({ filteredMovies: foundMovies });
  };

  render() {
    const loading = <h2 style={{ color: "white" }}>Loading...</h2>;

    const displayContent = (
      <div className="bannerImages">
        <Banner movies={this.state.movies} />
        <Movies movies={this.state.filteredMovies} />
      </div>
    );

    const shouldLoad = () => {
      if (!this.state.hasError) {
        return displayContent;
      }
    };

    return (
      <main>
        {!this.state.hasError && <SearchBar handleSearch={this.handleSearch} />}
        <Route
          exact
          path="/"
          render={() => {
            return (
              <div>
                {!this.state.hasError && (
                  <h1 className="title">Rancid Tomatillos</h1>
                )}
                {this.state.hasError && <Error />}
                {this.state.loading ? loading : shouldLoad()}
              </div>
            );
          }}
        />
        <Route
          exact
          path="/:id"
          render={({ match }) => {
            const foundMovie = this.state.moviesWithDetails.find(
              (item) => `${item.id}` === match.params.id
            );
            return <MovieDetails selectedMovie={foundMovie} />;
          }}
        />
      </main>
    );
  }
}

export default App;
