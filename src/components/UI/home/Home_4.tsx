import React from 'react';
import { home4DataLeft, home4DataRight } from '../../../data/home';

const Home_4: React.FC = () => {
    return (
        <div className="grid grid-cols-12 gap-4 px-4 md:px-8 mt-20">
            {/* Image Section */}
            <div className="col-span-12 md:col-span-6 flex justify-center items-center">
                {
                    home4DataLeft?.map((item) => (
                        <img
                            key={item.id}
                            className="w-full max-w-[400px] h-[450px] md:h-auto object-cover rounded-lg shadow-lg"
                            src={item.url}
                            alt="J-chaw Best Collections"
                        />
                    ))
                }
            </div>

            {/* Content Section */}
            <div className="col-span-12 md:col-span-6 flex justify-center md:justify-start items-center">
                {
                    home4DataRight?.map((item) => (
                        <div className='flex flex-col gap-y-5 w-full md:max-w-[440px]' key={item.id} >
                            {/* Title */}
                            <h1 className="text-2xl text-[var(--dark-brown)] header-text">
                                {item.title}
                            </h1>

                            {/* Description List */}
                            <ul className="flex flex-col gap-y-4">
                                <li className="text-lg font-bold text-gray-600">{item.label}</li>
                                <li className="text-sm md:text-lg xl:text-lg lato-light text-gray-600 leading-relaxed">
                                    {item.desc}
                                </li>
                            </ul>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Home_4;