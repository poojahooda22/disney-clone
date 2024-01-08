import React from 'react'

import { Movie } from '@/typings'
import Image from 'next/image'

function MovieCard({movie}: {movie: Movie}) {
  return (
    <div>
      <p>{movie.title}</p>

      <Image
        
      />
    </div>
  )
}

export default MovieCard
