import React from 'react';

const Home_4: React.FC = () => {
    return (
        <div className="grid grid-cols-12 gap-4 px-4 md:px-8 mt-20">
            {/* Image Section */}
            <div className="col-span-12 md:col-span-6 flex justify-center items-center">
                <img 
                    className="w-full max-w-[400px] h-[450px] md:h-auto object-cover rounded-lg shadow-lg" 
                    src="https://i.pinimg.com/736x/7f/e2/62/7fe2624a711f8503ecc8168a7d437e77.jpg" 
                    alt="J-chaw Best Collections" 
                />
            </div>

            {/* Content Section */}
            <div className="col-span-12 md:col-span-6 flex justify-center md:justify-start items-center">
                <div className="flex flex-col gap-y-6 md:gap-y-10 w-full md:max-w-[440px]">
                    {/* Title */}
                    <h1 className="text-2xl text-[var(--dark-brown)] header-text">
                        J-chaw Best Collections
                    </h1>
                    
                    {/* Description List */}
                    <ul className="flex flex-col gap-y-4">
                        <li className="text-lg font-bold text-gray-600">Comfort</li>
                        <li className="text-sm md:text-lg xl:text-lg lato-light text-gray-600 leading-relaxed">
                            We will reach out to you for the current cost of this permit. Please contact us for more information. 
                            Maui Divers Jewelry offers extended sizing which may be subject to an additional cost. 
                            Any subsequent resizes after purchase will incur an additional charge. Please note some styles cannot be resized due to their design.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Home_4;