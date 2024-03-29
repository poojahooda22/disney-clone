import Image from 'next/image';
import MoviesCarousel from '@/components/MoviesCarousel';
import { getUpcomingMovies, getPopularMovies, getTopRatedMovies } from '@/lib/getMovies';
import CarouselBannerWrapper from '@/components/CarouselBannerWrapper';

export default async function Home() {
  
  const upComingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();

  return (
    <main >
      
      {/* CarouselBannerWrapper */}
      <CarouselBannerWrapper />

      <div className='flex flex-col space-y-2 xl:-mt-48'>
        <MoviesCarousel movies={upComingMovies} title="Upcoming"  />
        <MoviesCarousel movies={topRatedMovies} title="Top Rated" />
        <MoviesCarousel movies={popularMovies} title="Popular" />
        {/* <MoviesCarousel for top rated movie /> */}
        {/* <MoviesCarousel for popular movie /> */}
      </div>
    </main>
  )
};
