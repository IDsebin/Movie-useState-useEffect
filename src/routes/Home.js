import { useState, useEffect } from "react";
import Movie from "../components/Movie";

function Home() {
  const [movie, setMovie] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
      )
    ).json();
    setMovie(json.data.movies);
  };

  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      <h1>Movie</h1>
      {movie.map((movies) => (
        <Movie
          key={movies.id}
          id={movies.id}
          pic={movies.medium_cover_image}
          title={movies.title}
          summary={movies.summary}
          genres={movies.genres}
        />
      ))}
    </div>
  );
}

export default Home;
