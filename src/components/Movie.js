import { Link } from "react-router-dom";

function Movie({ id, pic, title, summary, genres }) {
  return (
    <div>
      <img src={pic}></img>
      <h3>
        <Link to={`/movies/${id}`}>{title}</Link>
      </h3>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li>{g}</li>
        ))}
      </ul>
    </div>
  );
}

export default Movie;
