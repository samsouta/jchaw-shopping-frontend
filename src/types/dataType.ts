type ratingType = {
    rate:number;
    count:number
}

export type DataType = {
    id:number;
    title:string;
    description:string;
    image:string;
    price:string;
    category:string;
    rating:ratingType
}