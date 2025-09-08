import React, { useEffect } from 'react'
import Header from './Header'
import { API_OPTIONS } from '../utils/constant';

const Browse = () => {
   
  const getNowPlayingMovies = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1'`,
      API_OPTIONS
    );
    const data = await res.json();
    console.log(data);
  }

  useEffect(() => {
    getNowPlayingMovies();
  }, []);


  return (
    <div>
        <Header />
    </div>
  )
}

export default Browse