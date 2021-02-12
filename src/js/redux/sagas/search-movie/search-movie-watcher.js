import {takeEvery} from "redux-saga/effects";

import * as TRANSLATE_ACTIONS from '../../actions/translate/translate-actions';
import { SEARCH_MOVIE_NEXT_PAGE } from '../../actions/search-movie/search-movie-actions';
import searchMovie from './search-movie-worker';

export default function* searchMovieWatcher() {
    yield takeEvery([TRANSLATE_ACTIONS.REQUEST_TRANSLATE_SUCCESS, SEARCH_MOVIE_NEXT_PAGE], searchMovie);
}