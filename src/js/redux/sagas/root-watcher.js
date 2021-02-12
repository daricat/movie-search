import {all} from 'redux-saga/effects';

import translateWatcher from "./translate/translate-watcher";
import searchMovieWatcher from './search-movie/search-movie-watcher';

export default function* rootWatcher() {
    yield all([
        translateWatcher(),
        searchMovieWatcher(),
    ])
}