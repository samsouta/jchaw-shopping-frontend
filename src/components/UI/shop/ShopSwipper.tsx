import React, {useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import required modules
import { EffectCoverflow, Navigation } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import { useGetProductsQuery } from '../../../redux/api/fetchJData';
import SwripperBtn from '../SwripperBtn';

// Dummy data



const ShopSwipper: React.FC = () => {
     const {data} = useGetProductsQuery(1);
        const jData = data?.data || []
    const prevElRef = useRef<HTMLButtonElement>(null);
    const nextElRef = useRef<HTMLButtonElement>(null);

    const nav = useNavigate();
    const cardHandle = (id: number) => {
        nav(`/shop/${id}`)
    };

    return (
        <div className=" flex flex-col lg:px-0 items-center gap-6 mt-[50px] lg:mt-36">
            {/* Header Section */}
            <div className="flex flex-wrap justify-between items-center w-full max-w-[960px] p-4 rounded-md">
                <h1 className="text-xl text-[var(--dark-brown)] montserrat md:text-3xl font-bold">
                    Best Seller
                </h1>
                {/* Custom Swiper Buttons */}
                <div className="flex gap-x-3">
                    <SwripperBtn prevElRef={prevElRef} nextElRef={nextElRef} />
                </div>
            </div>

            <Swiper
                spaceBetween={30}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                breakpoints={{
                    640: {
                        slidesPerView: 2, // For screens smaller than 640px
                        spaceBetween: 20,
                    },
                   
                    1024: {
                        slidesPerView: 3, // For screens 1024px and larger
                        spaceBetween: 30,
                    },
                }}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                navigation={{
                    prevEl: prevElRef.current, // Custom previous button
                    nextEl: nextElRef.current, // Custom next button
                }}
                onBeforeInit={(swiper) => {
                    // Disable Swiper's default navigation buttons by assigning custom buttons
                    swiper.params.navigation.prevEl = prevElRef.current;
                    swiper.params.navigation.nextEl = nextElRef.current;
                    swiper.navigation.update(); // Update Swiper to apply the custom buttons
                }}
                modules={[EffectCoverflow, Navigation]}
                className="mySwiper w-full max-w-[960px]"
            >
                {jData.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div
                            className="py-4 bg-[var(--off-white)] cursor-pointer pb-0 overflow-hidden shadow-lg rounded-xl"
                            onClick={() => cardHandle(item.id)}
                        >
                            <div className="pb-0 pt-2 px-4 flex-col items-start">
                                <p className="font-bold header-text text-[var(--dark-brown)]">
                                    <span className="text-[var(--gold)] ">$</span>{item.price}
                                </p>
                                <small className=' text-[var(--gold)] lato-light' >12 Tracks</small>
                                <h4 className="lato-bold  text-[var(--dark-brown)]">Frontend Radio</h4>
                            </div>
                            <img
                                alt="Product"
                                className="object-fill w-full h-[300px]"
                                src={item.image}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

    );
};

export default ShopSwipper;
