import MoviesCarousel from '@/components/MoviesCarousel';
import { getPopularMovies, getSearchedMovies } from '@/lib/getMovies';
import { notFound } from 'next/navigation';
import React from 'react'

type Props = {
    params: {
        term: string;
    }
}


async function SearchPage({params: {term}} : Props) {
    // for not found page
    if(!term) notFound();

    const termToUse = decodeURI(term);

    const movies = await getSearchedMovies(termToUse);
    const popularMovies = await getPopularMovies();
    
  return (
    <div className='max-w-7xl mx-auto'>
      <div className='flex flex-col space-y-4 mt-32 xl:mt-42'>
        <h2  className='text-6xl font-semibold px-10'>Results for {termToUse}</h2>
        <MoviesCarousel title="Movies" movies={movies} isVertical />
        <MoviesCarousel title="You may also like" movies={popularMovies}  />
      </div>
    </div>
  )
}

export default SearchPage
