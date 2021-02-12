import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import * as SEARCH_MOVIE_ACTIONS from '../../actions/search-movie/search-movie-actions';

const initialState = {       
        page: 1,
        maxPage: 1,
        movieList: [],
        loading: false,
        error: {
            status: false,
            message: '',
        },
};

function searchMovieReducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH_MOVIE_ACTIONS.REQUEST_SEARCH_MOVIE:
            return {
                ...state,
                loading: true,
            };
        case SEARCH_MOVIE_ACTIONS.REQUEST_SEARCH_MOVIE_SUCCESS:
            return {
                ...state,
                loading: false,
                movieList: [...state.movieList, ...action.payload.movieList],
                maxPage: action.payload.maxPage,                
            };
        case SEARCH_MOVIE_ACTIONS.REQUEST_SEARCH_MOVIE_FAILURE:
            return {
                ...state,
                loading: false,
                error: {
                    ...state.error,                    
                    status: true,
                    message: action.payload,
                }
            };
        case SEARCH_MOVIE_ACTIONS.SEARCH_MOVIE_NEXT_PAGE:
            return {
                ...state,
                page: action.payload,
            };
        case SEARCH_MOVIE_ACTIONS.SEARCH_MOVIE_CLEAR_MOVIE_LIST:
            return {
                ...state,
                movieList: [],
                page: 1,
                maxPage: 1,
            }
        default:
            return state;
    }
}

const persistConfig = {
    key: 'searchMovie',
    storage: storage,
    whitelist: ['movieList']
};

export default persistReducer(persistConfig, searchMovieReducer);