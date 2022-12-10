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
      item.setState({ loading: false });
    })
    .catch((err) => {
      item.setState({ loading: false });
      item.setState({ hasError: true });
    });
};

export const getSingleMovie = (URL, id, item) => {
  fetch(`${URL}/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("weird error");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
};
