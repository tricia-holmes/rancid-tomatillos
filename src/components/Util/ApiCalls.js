
const getSingleMovie = (URL, id, array, thing) => {
  fetch(`${URL}/${id}`)
  .then((response) => {
    if (!response.ok) {
      throw new Error("SINGLE ERROR");
    }
    return response.json();
  })
  .then((data) => {
    array.push(data.movie);
    })
  };
  
  export const loadData = (URL, item) => {
    fetch(URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("weird error");
        }
        return response.json();
      })
      .then((data) => {
        item.setState({ movies: data.movies });
        item.setState({ filteredMovies: data.movies });
        const helperArray = [];
        data.movies.forEach((movie) => {
          getSingleMovie(URL, movie.id, helperArray, item);
        });
        item.setState({ moviesWithDetails: helperArray });
        setTimeout(() => {
          item.setState({ loading: false });
        }, 2000)
      })
      .catch((err) => {
        setTimeout(() => {
          item.setState({ loading: false });
          item.setState({ hasError: true });
        }, 2000)
      });
  };


