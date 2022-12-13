import "./App.css";
import React from "react";
import MovieDetails from "../MovieDetails/MovieDetails";
import Error from "../Error/Error";
import Loader from "../Loader/Loader";
import { Redirect, Route, Switch } from "react-router-dom";
import { loadData } from "../Util/ApiCalls";
import Home from "../Home/Home";
import NotFound from "../NotFound/NotFound";

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
    return (
      <main>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <div>
                  {this.state.loading ? (
                    <Loader />
                  ) : (
                    <Home
                      search={this.state.search}
                      handleSearch={this.handleSearch}
                      movies={this.state.movies}
                      filteredMovies={this.state.filteredMovies}
                      hasError={this.state.hasError}
                    />
                  )}
                  {this.state.hasError && <Error />}
                </div>
              );
            }}
          />
          <Route
            exact
            path="/rancid-tomatillos"
            render={() => <Redirect to="/" />}
          />
          <Route exact path="/not-found" component={NotFound} />
          <Route
            exact
            path="/:id"
            render={({ match }) => {
              const foundMovie = this.state.moviesWithDetails.find(
                (item) => `${item.id}` === match.params.id
              );
              if (foundMovie) {
                return <MovieDetails selectedMovie={foundMovie} />;
              } else {
                return <Redirect to="/not-found" />;
              }
            }}
          />
          <Route path="*" component={NotFound} />
        </Switch>
      </main>
    );
  }
}

export default App;
