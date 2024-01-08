import { Movie } from '@/typings';
import React from 'react'

type Props = {
    title?: string;
    movies: Movie[];
    isVertical?: boolean;
}

function MoviesCarousel({title, movies, isVertical}: Props) {
  return (
    <div className='z-50'>
        <h2>{title}</h2>
    </div>
  )
}

export default MoviesCarousel
