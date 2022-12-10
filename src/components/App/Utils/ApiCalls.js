export const loadData = (URL, item) => {
  fetch(URL)
    .then((resp) => {
      if (!resp.ok) {
        throw new Error("weird error");
      }
      return resp.json();
    })
    .then((data) => {
      const newMovies = data.movies.map((movie) => {
        console.log(movie.id);
        return getSingleMovie(URL, movie.id, item);
      });
      // item.setState({ movies: newMovies });
      item.setState({ loading: false });
      return newMovies;
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      item.setState({ loading: false });
      item.setState({ hasError: true });
    });
};

const getSingleMovie = (URL, id) => {
  fetch(`${URL}/${id}`)
    .then((resp) => {
      if (!resp.ok) {
        throw new Error("weird error");
      }
      return resp.json();
    })
    .then((data) => {
      console.log("MOVIE", data);
      return data;
    })
    .catch((err) => {
      // item.setState({ loading: false });
      // item.setState({ hasError: true });
    });
};
