import Image from 'next/image';
import MoviesCarousel from '@/components/MoviesCarousel';

export default function Home() {
  return (
    <main >
      <h1>Lets build Disney+ Clone</h1>

      {/* CarouselBannerWrapper */}

      <div>
        <MoviesCarousel movies={[]} title="Upcoming" />
        {/* <MoviesCarousel for top rated movie /> */}
        {/* <MoviesCarousel for popular movie /> */}
      </div>
    </main>
  )
};
