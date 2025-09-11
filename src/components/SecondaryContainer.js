import React from 'react'
import { useSelector } from 'react-redux'
import MoviesList from './MovieList'

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (

    movies.nowPlayingMovies && (
      <div className='bg-black'>
        <div className='-mt-31 relative z-20 '>
          <MoviesList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MoviesList title={"Trending"} movies={movies.topRatedMovies} />
          <MoviesList title={"Popular"} movies={movies.addPopularMovies} />
          <MoviesList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
          {/* <MoviesList title={"Horror"} movies={movies.nowPlayingMovies} /> */}
        </div>
      </div>
    )
  )
}

export default SecondaryContainer