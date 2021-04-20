import React from "react";
import axios from "axios";
import Movie from "./Movie";

let get_movies_url = "https://yts-proxy.nomadcoders1.now.sh/list_movies.json";
let sort_param = "?sort_by=rating";
get_movies_url += sort_param;

class App extends React.Component {
  state = { isLoading: true, movies: [] };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(get_movies_url);
    // console.log(movies);
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading
          ? "Loading..."
          : movies.map((movie) => {
              console.log(movie);
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                />
              );
            })}
      </div>
    );
  }
}

export default App;
