import logo from "./logo.svg";
import "./App.css";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      currentMovie: {},
    };
  }

  componentDidMount() {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({ movies: data.movies });
      });
  }

  render() {
    return (
      <main>
        <h1>Racid Tomatillos</h1>
        {/* <Banner />
        <Movies />
        {this.state.currentMovie && <MovieDetails />} */}
      </main>
    );
  }
}

export default App;
