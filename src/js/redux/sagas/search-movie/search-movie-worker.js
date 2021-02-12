import { call, put, select } from 'redux-saga/effects';

import { ombdUrl } from '../../../api/ombd-api';
import { getSearchPage, getSearchTitle } from './search-movie-selectors';
import * as searchMovieActions from '../../actions-creator/search-movie/search-movie-actions-creator';

function fetchSearchMovie(title, page) {
    return fetch(ombdUrl(title, page));
}

function* searchMovie() {    
    const title = yield select(getSearchTitle);
    const page = yield select(getSearchPage);
    yield put(searchMovieActions.requestSearchMovie());
    try {
        const searchMovieRequest = yield call(fetchSearchMovie, title, page);
        if (searchMovieRequest.status >= 200 && searchMovieRequest.status < 300) {
            const searchMovie = yield searchMovieRequest.json();
            yield console.log(searchMovie.totalResults);
            yield put(searchMovieActions.requestSearchMovieSuccess({movieList: searchMovie.Search, totalResult: searchMovie.totalResults}));
        } else {
            throw searchMovieRequest;
        }
    } catch (error) {
        console.log(error);
        yield put(searchMovieActions.requestSearchMovieFailure(error.statusText));
    }
}

export { searchMovie as default };