import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
    
   const dispatch = useDispatch();

  const getMoviesVideos = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"}/videos?api_key=1c8f4b1f5e8e4d3f1e2c3b4a5d6e7f8g&language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    // console.log(trailer);
    // setTrailerId(trailer.key);
    dispatch(addTrailerVideo(trailer));

  };
  useEffect(() => {
    getMoviesVideos();
  }, [])
 
}

export default useMovieTrailer;

