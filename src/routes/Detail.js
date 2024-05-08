import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [details, setDetail] = useState("");

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetail(json);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading,,,</h1> // if it is still on loading,,
      ) : (
        // if loading finished,,,
        <div>
          <img src={details.data.movie.medium_cover_image}></img>
          <h3> Title : {details.data.movie.title}</h3>
          <h3> Genres : {details.data.movie.genres[0]}</h3>
          <h3> Year : {details.data.movie.year}</h3>
          <h3> Languages : {details.data.movie.language}</h3>
          <h3>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              Go back
            </Link>
          </h3>
        </div>
      )}
    </div>
  );
}
export default Detail;
