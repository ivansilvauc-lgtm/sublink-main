"use client"
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ITela } from '@/model/tela';

const Carousel = ({ recomendaciones }: { recomendaciones: ITela[] }) => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction: string) => {
    if (direction === 'prev') {
      return currentIndex <= 0;
    }

    if (direction === 'next' && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <div className="carousel my-28 mx-auto">
      <h2 className="text-2xl leading-4 font-semibold mb-12 text-zinc-700 text-center">
        También te puede interesar
      </h2>
      <div className="relative w-full mx-auto">
        <div className="hidden xl:flex justify-between absolute w-full h-full z-0">
          <button
            onClick={movePrev}
            className="hover:scale-105 text-zinc-900 w-10 h-3/4 -ml-14 text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled('prev')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Prev</span>
          </button>
          <button
            onClick={moveNext}
            className="hover:scale-105 text-zinc-900 w-10 h-3/4 -mr-14 text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled('next')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Next</span>
          </button>
        </div>
        <div
          ref={carousel}
          className="hidden xl:flex carousel-container mx-auto max-w-5xl relative gap-4 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
        >
          {
            recomendaciones.map((resource, index) => {
              if (resource.imagen_zoom === null || resource.imagen_zoom === undefined || resource.imagen_zoom === '') {
                return null;
              }
              return (
                <div className="flex flex-col z-10" key={index}>
                  <div
                    className="carousel-item text-center w-48 h-48 snap-start">
                    <Link
                      href={`/telas/${resource.categoria_slug}/${resource.slug}`}
                      className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-50">
                      <Image
                        src={resource.imagen_zoom || ''}
                        width={200}
                        height={200}
                        alt={resource.nombre}
                        className="w-full aspect-square rounded-xl"
                      />
                    </Link>
                  </div>
                  <h3 className="text-zinc-700 py-3 mx-auto text-base text-center">
                    {resource.nombre}
                  </h3>
                </div>
              );
            })
          }
        </div>
        <div
          className="flex flex-wrap xl:hidden gap-4 justify-center"
        >
          {
            recomendaciones.map((resource, index) => {
              if (resource.imagen_zoom === null || resource.imagen_zoom === undefined || resource.imagen_zoom === '') {
                return null;
              }
              return (
                <div className="flex flex-col w-32 sm:w-48 h-auto" key={index}>
                  <div
                    className="text-center w-32 h-32 sm:w-48 sm:h-48">
                    <Link
                      href={`/telas/${resource.categoria_slug}/${resource.slug}`}
                      className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-50">
                      <Image
                        src={resource.imagen_zoom || ''}
                        width={200}
                        height={200}
                        alt={resource.nombre}
                        className="w-full aspect-square rounded-xl"
                      />
                    </Link>
                  </div>
                  <h3 className="text-zinc-700 py-1 sm:py-3 mx-auto text-sm sm:text-base text-center">
                    {resource.nombre}
                  </h3>
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Carousel;

// style={{ backgroundImage: `url(${resource.imagen_zoom || ''})` }}