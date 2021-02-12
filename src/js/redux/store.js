import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

import rootReducer from './root-reducer';
import rootWatcher from './sagas/root-watcher';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['searchMovieReducer']
}

const saga = createSagaMiddleware();

export const store = createStore(rootReducer,
    composeWithDevTools(
        applyMiddleware(
            saga
        )
    ),
);

export const persistor = persistStore(store);

saga.run(rootWatcher);
