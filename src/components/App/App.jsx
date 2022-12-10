import "./App.css";
import React from "react";
import Banner from "../Banner/Banner";
import Movies from "../Movies/Movies";
import MovieDetails from "../MovieDetails/MovieDetails";
import Error from "../Error/Error";
import { Route } from "react-router-dom";
import { loadData, getSingleMovie } from "./Utils/ApiCalls";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      loading: true,
      hasError: false,
    };
  }

  componentDidMount = () => {
    loadData("https://rancid-tomatillos.herokuapp.com/api/v2/movies", this);
  };

  render() {
    const loading = <h2 style={{ color: "white" }}>Loading...</h2>;

    const displayContent = (
      <div className="bannerImages">
        <Banner movies={this.state.movies} />
        <Movies movies={this.state.movies} />
      </div>
    );

    const shouldLoad = () => {
      if (!this.state.hasError) {
        return displayContent;
      }
    };

    return (
      <main>
        <Route
          exact
          path="/"
          render={() => {
            return (
              <div>
                <h1 className="title">Rancid Tomatillos</h1>
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
            const foundMovie = this.state.movies.find(
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
