import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'

const MovieCard = ({ posterPath }) => {
  return (
    <div className='w-48 h-72 m-2 hover:scale-110 transition-transform duration-300 ease-in-out pr-4'>
      <img alt='Movie Card' 
      src={IMG_CDN_URL+posterPath}
      />
    </div>
  )
}

export default MovieCard