import React from 'react';
import { getDiscoverMovies } from '@/lib/getMovies';
import CarouselBanner from './CarouselBanner';

type Props = {
  id?: string;
  keywords?: string;
}

async function CarouselBannerWrapper({id, keywords}: Props) {
  const movies = await getDiscoverMovies(id, keywords);
  return 
  <CarouselBanner movies={movies} />
}

export default CarouselBannerWrapper;
