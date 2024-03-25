'use client';

import { Movie } from '@/typings';

import React, { useRef, useEffect } from 'react';
import MovieCard from './MovieCard';
import { cn } from "@/lib/utils";

type Props = {
    title?: string;
    movies: Movie[];
    isVertical?: boolean;
}

function MoviesCarousel({title, movies, isVertical}: Props) {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    const startDragging = (e: MouseEvent) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const stopDragging = () => {
      isDown = false;
      slider.classList.remove('active');
    };

    const whileDragging = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3;
      slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener('mousedown', startDragging);
    slider.addEventListener('mouseleave', stopDragging);
    slider.addEventListener('mouseup', stopDragging);
    slider.addEventListener('mousemove', whileDragging);

    return () => {
      slider.removeEventListener('mousedown', startDragging);
      slider.removeEventListener('mouseleave', stopDragging);
      slider.removeEventListener('mouseup', stopDragging);
      slider.removeEventListener('mousemove', whileDragging);
    };
  }, []);

  return (
    <div className='z-50'>
        <h2 
          className='text-xl font-bold  
          px-10 py-2'
        >
          {title}
          </h2>

        <div 
          ref={sliderRef}
          className={cn(
            "flex space-x-4 overflow-scroll px-5 lg:px-10 py-5 scrollbar-hide",
            isVertical && "flex-col space-x-0 space-y-12"
          )}
        >
          {isVertical 
            ? movies.map((movie) => (
              <div
                key={movie.id}
                className={cn(
                  isVertical && "flex flex-col space-y-5 mb-5 items-center lg:flex-row space-x-5"
                )}
              >
                <MovieCard movie={movie} />
                <div className='max-w-2xl'>
                  <p className='font-bold'>{movie.title} {movie.release_date?.split("-")[0]}</p>
                  <hr className='mb-3' />
                  <p className=''>{movie.overview}</p>
                </div>
              </div>
            )) : 
            movies?.map((movie) => 
              <MovieCard key={movie.id} movie={movie} />
            )}
        </div>  
    </div>
  )
}

export default MoviesCarousel
