import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { DataType } from '../../types/dataType';

type metaType = {
    current_page: number;
    from: number;
    last_page: number;
    per_page: number;
    to: number;
    total: number;
};

type JDataType = {
    data: DataType[] | undefined;
    meta: metaType | undefined;
};

export const getJData = createApi({
    reducerPath: 'data',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://bluetv.x10.bz/api/v1/' }), // Base URL
    endpoints: (builder) => ({
        getProductsGenre: builder.query<JDataType | undefined, { genre: string, page: number }>({
            query: ({ genre, page }) => `product?category=${genre}&page=${page}`, 
        }),

        //all
        getProducts: builder.query<JDataType | undefined, number>({
            query: (page) => `products?page=${page}`, 
        }),
    }),
});

export const { useGetProductsQuery, useGetProductsGenreQuery } = getJData; // Exporting the auto-generated hooks
