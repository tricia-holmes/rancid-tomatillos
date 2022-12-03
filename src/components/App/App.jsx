import './App.css'
import React from 'react'
import Banner from '../Banner/Banner'
import Movies from '../Movies/Movies'
import MovieDetails from '../MovieDetails/MovieDetails'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      currentMovie: {},
      loading: true,
    }
  }

  componentDidMount() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({ movies: data.movies })
        this.setState({ loading: false })
      })
  }

  handleClick = (event) => {
    const movieFound = this.state.movies.find(
      (item) => `${item.id}` === event.target.id
    )
    this.setState({ currentMovie: movieFound })
  }

  render() {
    const loading = <h2 style={{ color: 'white' }}>Loading...</h2>
    const displayContent = (
      <div className="bannerImages">
        <Banner movies={this.state.movies} randomMovie={this.randomMovie} />
        <Movies movies={this.state.movies} handleClick={this.handleClick} />
      </div>
    )

    return (
      <main>
        <h1>Rancid Tomatillos</h1>
        {this.state.loading ? loading : displayContent}
        {this.state.currentMovie && <MovieDetails />}
      </main>
    )
  }
}

export default App
