import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { searchMovieNextPage } from '../../redux/actions-creator/search-movie/search-movie-actions-creator';

const AddMovie = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector(store => store.searchMovieReducer.page);
    const maxPage = useSelector(store => store.searchMovieReducer.maxPage);
    
    const checkCorrectPage = () => {
        if ( currentPage + 1 <= maxPage ) {
            console.log(currentPage, currentPage + 1, maxPage);
            dispatch(searchMovieNextPage(currentPage + 1));
        }
    }

    return (
        <button 
            className = "add-movie"
            onClick = { checkCorrectPage }
        >
            Next Page
        </button>
    );
}

export { AddMovie as default };