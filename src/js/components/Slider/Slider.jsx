import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import SwiperCore, { Mousewheel  } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import MovieCard from './Movie-card/Movie-cards';
import { searchMovieNextPage } from '../../redux/actions-creator/search-movie/search-movie-actions-creator';

import 'swiper/swiper.scss';

SwiperCore.use([Mousewheel]);

const Slider = () => {
  const dispatch = useDispatch();

  const movieList = useSelector(store => store.searchMovieReducer.movieList);
  const currentPage = useSelector(store => store.searchMovieReducer.page);
  const maxPage = useSelector(store => store.searchMovieReducer.maxPage);

  const checkCorrectPage = () => {
    if ( currentPage + 1 <= maxPage ) {
        console.log(currentPage, currentPage + 1, maxPage);
        dispatch(searchMovieNextPage(currentPage + 1));
    }
  }

  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={3}
      onReachEnd={checkCorrectPage}
      mousewheel={true}
    >
      { 
        movieList.map((movie, index) => (
        <SwiperSlide key = {index}>
          <MovieCard key = {index} movieInfo = { movie }></MovieCard>
        </SwiperSlide>
        ))
      }
    </Swiper>
  );
}

export { Slider as default };

