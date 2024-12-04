import React from 'react'


const Home_5: React.FC = () => {
    return (
        <>
            <div className="mt-16 px-4 md:px-8">
                <div className="grid grid-cols-12 gap-6">
                    {/* Content Section */}
                    <div
                        className="col-span-12 md:col-span-6 flex justify-center items-center"
                    >
                        <div className="flex flex-col gap-y-6 w-full md:max-w-[440px]">
                            <ul className="flex flex-col gap-y-5 break-words">
                                <li className="text-2xl text-[var(--dark-brown)] header-text tracking-wider">
                                    100% Gold
                                </li>
                                <li className="text-sm md:text-lg lato-light text-gray-600 leading-relaxed">
                                    Gold chains were a sign of service to the supreme beings of a particular religion in the past. Nowadays, they are symbols of wealth and class. Rap artists were most likely the ones who brought the custom of wearing gold chains to modern men's everyday life. There are a few reasons why men wear gold chains.
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div
                        className="col-span-12 md:col-span-6 flex justify-center items-center"
                    >
                        <img
                            className="w-full max-w-[400px] h-auto object-cover rounded-lg shadow-md"
                            src={'https://i.pinimg.com/736x/71/ea/cb/71eacb4e877ee4b8a24231562b1a4485.jpg'}
                            alt="Gold Chains"
                        />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home_5