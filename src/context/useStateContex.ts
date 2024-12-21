import React, { useState } from "react";

type DataType = {
    id: number;
    title: string;
    description: string;
    posted_date: string;
    genre: string;
    duration: string;
    view_count: string;
    rating_count: string;
    rating_total: string;
    url: string;
    img_path:string;
};



export const useStateContext = () => {
    const [jdata,setJdata] = useState<DataType[] | undefined>([]);
    const [genre,setGenre] = useState<string>('');

 


    return {
        jdata,setJdata,
        genre,setGenre
    };
};
