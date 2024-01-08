import Image from 'next/image';
import MoviesCarousel from '@/components/MoviesCarousel';

export default async function Home() {
  const upComingMovies = await getUpcomiongMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();
  return (
    <main >
      

      {/* CarouselBannerWrapper */}

      <div className='flex flex-col space-y-2 xl:-mt-48'>
        <MoviesCarousel movies={[]} title="Upcoming" />
        {/* <MoviesCarousel for top rated movie /> */}
        {/* <MoviesCarousel for popular movie /> */}
      </div>
    </main>
  )
};
