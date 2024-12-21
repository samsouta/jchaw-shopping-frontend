import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@nextui-org/react';
import { home3DataLeft,home3DataRight } from '../../../data/home';
const Home_3: React.FC = () => {
    return (
        <div className="grid grid-cols-12 gap-4 px-4 md:px-8">
            {/* Left Side: Content */}
            <div className="col-span-12 md:col-span-6 flex justify-center md:justify-start items-center">
                <div className="w-full md:w-[400px]">
                   {
                    home3DataRight?.map((item) => (
                        <div key={item.id} >
                        {/* Content Section */}
                        <div className="flex flex-col">
                            <span className="text-2xl text-[var(--dark-brown)] header-text">
                                {item.title}
                            </span>
                            <span className="text-sm xl:text-lg lato-light text-gray-600 mt-3 leading-relaxed">
                                {item.desc}
                            </span>
                        </div>

                        {/* Size Options */}
                        <div className="mt-6">
                            <span className="text-lg text-[var(--dark-brown)] font-semibold">Size</span>
                            <ul className="flex gap-x-5 mt-2">
                                {
                                    item.size.map((item)=>(
                                        <li key={item.id} className="text-md cursor-pointer text-gray-600 font-serif">{item.data}</li>
                                    ))
                                }
                                
                            </ul>
                        </div>

                        {/* Add to Cart & Price */}
                        <div className="flex items-center gap-x-5 mt-8">
                            <Link to="/shop">
                                <Button
                                    className="bg-[var(--tan)] text-[var(--dark-brown)] hover:bg-[var(--dark-brown)] hover:text-white"
                                    variant="solid"
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

            {/* Right Side: Image */}
            <div className="col-span-12 md:col-span-6 flex justify-center items-center">
                {
                    home3DataLeft?.map((item) => (
                        <img
                            key={item.id}
                            className="w-full max-w-[500px] h-[400px] object-cover rounded-lg shadow-lg"
                            src={item.url}
                            alt="Gold Woven Chain Bracelet"
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Home_3;
