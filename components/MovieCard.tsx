import React from 'react'

import { Movie } from '@/typings'
import Image from 'next/image'

function MovieCard({movie}: {movie: Movie}) {
  return (
    <div>
      <p>{movie.title}</p>

      <Image
        src={getImagePath(movie.backdrop_path || movie.poster_path)}
        alt={movie.title}
        width={1920}
        height={1080}
        key={movie.id}
      />
    </div>
  )
}

export default MovieCard
