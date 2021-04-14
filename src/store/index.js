import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import { createStore, applyMiddleware, compose } from 'redux';
import Thunk from 'redux-thunk';
import reducers from './reducers';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['reducerAuth']
};

const persistedReducer = persistReducer(persistConfig, reducers);

const composeEnhancers = typeof window === 'object' &&
    (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose);

/* eslint-disable no-underscore-dangle */
export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(Thunk)));
/* eslint-enable */
export const persistor = persistStore(store);
