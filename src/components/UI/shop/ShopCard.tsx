import React, { useEffect, useState } from 'react'
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { useNavigate } from 'react-router-dom';
import { DataType } from '../../../types/dataType';
import Jskeleton from '../Loader/Jskeleton';

type Props = {
    data:DataType ;
    isLoading:boolean;
}

const ShopCard: React.FC<Props> = ({data,isLoading}) => {
    const [showTVske, setShowTVske] = useState(false);
    const nav = useNavigate();

    const cardHandle = (id: number) => {
        nav(`/shop/${id}`);
    };

    useEffect(() => {
        if (!isLoading) {
            setShowTVske(true);
            const timer = setTimeout(() => {
                setShowTVske(false);
            }, 2000);

            // Clean up the timer when component unmounts or when isLoading changes
            return () => clearTimeout(timer);
        }
    }, [isLoading]);
    return (
        <div>
            {
                showTVske ? (
                    <Jskeleton key={data.id} />
                ) : (
                    <Card
                        onPress={() => cardHandle(data?.id)}
                        shadow="sm"
                        key={data?.id}
                        className="w-full h-full bg-[var(--off-white)] rounded-xl"
                        isPressable
                    >
                        <CardBody className="overflow-visible p-0">
                            <Image
                                shadow="sm"
                                radius="lg"
                                width="100%"
                                alt={data?.title}
                                className="object-fill w-full h-[200px] md:h-[300px] rounded-b-xl"
                                src={data?.image}
                            />
                        </CardBody>
                        <CardFooter className="text-small justify-between">
                            <b className="truncate w-[150px] lato-regular text-[var(--dark-brown)]">{data?.title}</b>
                            <p className="font-bold header-text text-[var(--dark-brown)] text-md">
                                <span className="text-[var(--gold)]">$</span>{data?.price}
                            </p>
                        </CardFooter>
                    </Card>
                )
            }
        </div>
    )
}

export default ShopCard