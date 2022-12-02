import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Banner from "./Banner/Banner";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      currentMovie: {},
      banner: {},
    };
  }

  componentDidMount() {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({ movies: data.movies });
        this.setState({ banner: this.randomMovie() });
      });
  }

  randomMovie() {
    return this.state.movies[
      Math.floor(Math.random()) * this.state.movies.length
    ];
  }

  render() {
    return (
      <main>
        <h1>Racid Tomatillos</h1>
        <Banner banner={this.state.banner} />
        {/*<Movies />
        {this.state.currentMovie && <MovieDetails />} */}
      </main>
    );
  }
}

export default App;
