import { Movie } from '@/typings';
import React from 'react'

type Props = {
    title?: string;
    movies: Movie[];
    isVertical?: boolean;
}

function MoviesCarousel({title, movies, isVertical}: Props) {
  return (
    <div>
        Movie
    </div>
  )
}

export default MoviesCarousel
