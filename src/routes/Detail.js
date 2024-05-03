import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Detail() {
  const [loading, setLoading] = useState(true);
  const [details, setDetail] = useState([]);

  const getMovies = async () => {
    const json = getMovie();
    setDetail(json.data.movie);
    setLoading(false);
  };

  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    return json;
  };

  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? <h1>loading...</h1> : <h1>movies{console.log(details.id)}</h1>}
    </div>
  );
}
export default Detail;
