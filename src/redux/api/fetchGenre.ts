import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type DataType = {
    genres: string[];
};


export const getAllGenre = createApi({
    reducerPath: 'genre', // Name of the API slice
    baseQuery: fetchBaseQuery({ baseUrl: 'https://bluetv.x10.bz/api/v1/' }), // Base URL
    endpoints: (builder) => ({
        getGenre: builder.query<DataType |undefined , void>({
            query: () => 'genre', // Endpoint path for fetching all videos
        }),
    }),
});

export const { useGetGenreQuery } = getAllGenre; // Exporting the auto-generated hook
