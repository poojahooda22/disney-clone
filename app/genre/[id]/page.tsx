import React from 'react';
import { getDiscoverMovies } from '@/lib/getMovies';
import MoviesCarousel from '@/components/MoviesCarousel';

type Props = {
    params: {
        id: string;
    },
    searchParams: {
        genre: string;
    }
}

async function GenrePage({ params: { id }, searchParams: {genre}}: Props) {
  const movies = await getDiscoverMovies(id);
  return (
    <div className='max-w-7xl mx-auto' >
     
     <div className='flex flex-col space-y-4 mt-32 xl:mt-42'>
      <h1 className='text-6xl font-semibold px-10'>Results for {genre}</h1>
      <MoviesCarousel title={`Genre`} movies={movies} isVertical />
     </div>
    </div>
  )
}

export default GenrePage
