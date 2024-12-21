import { configureStore } from '@reduxjs/toolkit';
import { getAllGenre } from './api/fetchGenre';
import { getJData } from './api/fetchJData';

export const store = configureStore({
  reducer: {
    [getAllGenre.reducerPath]: getAllGenre.reducer,
    [getJData.reducerPath]: getJData.reducer,
   
    // slice
    // home: HomeSlice.reducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
        getAllGenre.middleware,
        getJData.middleware,

    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
