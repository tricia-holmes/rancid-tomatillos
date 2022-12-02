import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Banner from "./Banner/Banner";
import Movies from "./Movies/Movies";
import movieData from "./MovieData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: movieData,
      currentMovie: {},
      loading: false,
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    // fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
    //   .then((resp) => resp.json())
    //   .then((data) => {
    //     this.setState({ movies: data.movies });
    //     this.setState({ loading: false });
    //   });
    this.setState({ loading: false });
  }

  randomMovie(array) {
    return Math.floor(Math.random() * array.length);
  }

  render() {
    const loading = <h2>Loading...</h2>;
    const displayContent = (
      <div className="bannerImages">
        <Banner movies={this.state.movies} />
        <Movies movies={this.state.movies} />
      </div>
    );

    return (
      <main>
        <h1>Racid Tomatillos</h1>
        {this.state.loading ? loading : displayContent}
        {/* {this.state.currentMovie && <MovieDetails />} */}
      </main>
    );
  }
}

export default App;
