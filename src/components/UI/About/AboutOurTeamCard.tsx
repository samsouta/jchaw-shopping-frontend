import React from 'react';
import { Card, CardHeader, CardFooter, Image } from "@nextui-org/react";

type DataType = {
    name: string;
    position: string;
    place: string;
    image: string;
};
type Props = {
    data: DataType;
};

const AboutOurTeamCard: React.FC<Props> = ({ data }) => {
    const { name, position, place, image } = data;

    return (
        <div className='flex justify-center w-full'>
            <Card
                isFooterBlurred
                className="w-full max-w-[280px] sm:max-w-[300px] h-[300px]"
            >
                <CardHeader className="absolute z-10 top-1 flex-col items-start">
                    <p className="text-tiny text-[var(--green)] font-extrabold uppercase">
                        {name}
                    </p>
                </CardHeader>
                <Image
                    removeWrapper
                    alt="Card example background"
                    className="z-0 w-full h-full object-cover"
                    src={image}
                />
                <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                    <div>
                        <p className="text-[var(--off-white)] montserrat font-bold">
                            {position}
                        </p>
                        <p className="lato-regular text-[var(--dark-brown)] text-sm">
                            {place}
                        </p>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
};

export default AboutOurTeamCard;
