import React from 'react';

const MovieCard = ({ movieInfo }) => {
    return (
        [
            <h2 key = {'title'}>{movieInfo.Title}</h2>,
            <img key = {'poster'} src = {movieInfo.Poster} alt="poster"/>,
            <span key = {'year'}>{movieInfo.Year}</span>
        ]
    )
}

export { MovieCard as default };