const loadData = (URL, item) => {
  fetch(URL)
    .then((resp) => {
      if (!resp.ok) {
        throw new Error("weird error");
      }
      return resp.json();
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

export default loadData;
