import { configureStore } from '@reduxjs/toolkit';
import urlsReducer from './reducers/urlReducer'

export const rootReducer = {
    urls: urlsReducer,
}

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
