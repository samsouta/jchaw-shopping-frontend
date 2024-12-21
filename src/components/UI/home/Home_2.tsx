import { Button } from '@nextui-org/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { home2DataLeft, home2DataRight } from '../../../data/home';

const Home_2: React.FC = () => {


    return (
        <>
            <div className="grid grid-cols-12 md:gap-x-3 gap-4 px-4 md:px-8">
                {/* Left Side */}
                <div className="col-span-12 md:col-span-6">
                    {/* Image Section */}
                    {home2DataLeft?.map((item) => (
                        <div
                            key={item.id}
                            className="col-span-12 md:col-span-6 flex justify-center mb-4 md:mb-0"
                        >
                            <img
                                className="w-full max-w-[500px] h-[400px] object-cover rounded-lg shadow-lg"
                                src={item.url}
                                alt="Gold Woven Chain Bracelet"
                            />
                        </div>
                    ))}
                </div>

                {/* Right Side */}
                <div className="col-span-12 lg:ps-5 md:col-span-6">
                    {
                        home2DataRight?.map((item) => (
                            <div key={item.id} className="w-full">
                                {/* Content Section */}
                                <div className="flex flex-col md:w-[400px] ">
                                    <span className="text-2xl text-[var(--dark-brown)] header-text">
                                        {item.title}
                                    </span>
                                    <span className="text-sm md:text-lg lato-light text-gray-600 mt-3">
                                        {item.desc}
                                    </span>
                                </div>
                                {/* Size Options */}
                                <div className="mt-6">
                                    <span className="text-lg text-[var(--dark-brown)] font-semibold">Size</span>
                                    <ul className="flex gap-x-5 mt-2">

                                        {
                                            item.size?.map((item) => (
                                                <li key={item.id} className="text-md cursor-pointer text-gray-600 font-serif">{item.data}</li>
                                            ))
                                        }
                                    </ul>

                                </div>

                                {/* Add to Cart & Price */}
                                <div className="flex justify-start gap-x-5 mt-8">
                                    <Link to="/shop">
                                        <Button
                                            className="bg-[var(--tan)] text-[var(--dark-brown)]"
                                            variant="faded"
                                            radius="sm"
                                        >
                                            ADD TO CART
                                        </Button>
                                    </Link>
                                    <span className="text-xl header-text text-[var(--gold)]">$ {item.price}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default Home_2;
