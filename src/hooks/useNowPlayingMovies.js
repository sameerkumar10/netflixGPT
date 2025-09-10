import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";


const useNowPlayingMovies = () => {
 
     // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();
   
  const getNowPlayingMovies = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1'`,
      API_OPTIONS
    );
    const json = await res.json();
    // console.log(json);
    dispatch(addNowPlayingMovies(json.results));
  }

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

};

export default useNowPlayingMovies;