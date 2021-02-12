import * as SEARCH_MOVIE_ACTIONS from '../../actions/search-movie/search-movie-actions';

export function requestSearchMovie() {
    return {
        type: SEARCH_MOVIE_ACTIONS.REQUEST_SEARCH_MOVIE,
    }
}

export function requestSearchMovieSuccess({ totalResult, movieList }) {
    return {
        type: SEARCH_MOVIE_ACTIONS.REQUEST_SEARCH_MOVIE_SUCCESS,
        payload: {
            maxPage: Math.ceil( totalResult / movieList.length === 10 ? movieList.length : 10 ),
            movieList,
        },
    }
}

export function requestSearchMovieFailure(payload) {
    return {
        type: SEARCH_MOVIE_ACTIONS.REQUEST_SEARCH_MOVIE_FAILURE,
        payload,
    }
}

export function searchMovieNextPage(payload) {
    return {
        type: SEARCH_MOVIE_ACTIONS.SEARCH_MOVIE_NEXT_PAGE,
        payload,
    }
}

export function clearMovieList() {
    return {
        type: SEARCH_MOVIE_ACTIONS.SEARCH_MOVIE_CLEAR_MOVIE_LIST,
    }
}