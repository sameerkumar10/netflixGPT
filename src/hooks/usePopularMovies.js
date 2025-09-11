import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";


const usePopularMovies = () => {
 
     // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();
   
  const getPopularMovies = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await res.json();
    // console.log(json);
    dispatch(addPopularMovies(json.results));
  }

  useEffect(() => {
    getPopularMovies();
  }, []);

};

export default usePopularMovies;