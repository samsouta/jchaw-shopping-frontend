import React from 'react';
import { home_p2 } from '../../../assets/img';
import { home1, home1Part, home1RightSide } from '../../../data/home';
const Home_1: React.FC = () => {


    return (
        <div>
            <div className="grid grid-cols-12 md:gap-x-3 gap-4 px-4 md:px-8">
                {/* Left Side */}
                <div className="col-span-12 md:col-span-6">
                    {
                        home1?.map((item) => (
                            <div key={item.id} className="flex items-center flex-col sm:gap-y-5">
                                <img
                                    className="w-full max-w-[500px] h-[400px] object-cover"
                                    src={item.url}
                                    alt="Jewelry design"
                                />
                                <span

                                    className="header-text font-sans text-center text-wrap text-dark-brown text-[2rem] sm:text-[2.5rem] lg:text-[3.5rem] lg:w-[550px] w-full leading-[50px]"
                                >
                                    {item.title}
                                </span>
                            </div>
                        ))
                    }
                    <div

                        className="w-full flex-wrap flex justify-start lg:justify-center gap-6 mb-10 mt-[30px]"
                    >
                        {home1Part?.map((item) => (
                            <ul key={item.id}>
                                <li className="text-xl text-dark-brown header-text">{item.id}</li>
                                <li className="text-sm xl:text-lg lato-light text-gray-600 mt-2 w-[240px] break-words">
                                    {item.title}
                                </li>
                            </ul>
                        ))}
                    </div>
                </div>

                {/* Right Side */}
                <div className="col-span-12 lg:ps-5 md:col-span-6">
                    <div className="w-full">
                        {
                            home1RightSide?.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex flex-col break-words w-full"
                                >
                                    <span className="text-xl text-dark-brown header-text">{item.id}</span>
                                    <span className="lato-light text-gray-600 text-sm text-wrap mt-2 xl:text-lg lg:w-[350px]">
                                        {item.title}
                                    </span>
                                </div>
                            ))
                        }
                        <div className="flex flex-col justify-center w-full">
                            <img

                                className="mt-4 w-full lg:w-[500px] xl:w-[600px] xl:h-[500px] h-[300px]"
                                src={home_p2}
                                alt="Jewelry showcase"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home_1;
