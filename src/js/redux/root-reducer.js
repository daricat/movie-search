import { combineReducers } from "redux";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import translateReducer from './reducers/translate/translate-reducer';
import searchMovieReducer from './reducers/search-movie/search-movie-reducer';

const rootReducer = combineReducers({translateReducer, searchMovieReducer});

const rootPersistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['searchMovieReducer']
}

export default  persistReducer(rootPersistConfig, rootReducer);