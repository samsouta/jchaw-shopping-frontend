import React from 'react'


const Home_9: React.FC = () => {
    return (
        <>
            <div className="px-4">
                <div className="mt-24 flex flex-col items-center gap-y-10">
                    <h1 className="text-center font-bold text-2xl text-[var(--dark-brown)] header-text">
                        Our Blogs
                    </h1>
                    <div className="flex flex-wrap justify-center gap-6">
                        {/* Blog Card */}
                        <div className="max-w-[300px] flex flex-col gap-y-4">
                            <img
                                className="w-full h-[300px] object-cover rounded-md"
                                src="https://i.pinimg.com/564x/35/48/66/354866bd770e78485a6bdd91da25af8a.jpg"
                                alt="Blog 1"
                            />
                            <ul className="flex flex-col gap-y-3">
                                <li className="text-xl montserrat font-medium text-[var(--dark-brown)] ">
                                    For Beauty
                                </li>
                                <li className=" break-words text-sm lato-regular text-gray-600">
                                    Warmly Little Before Cousin Sussex Entire Men Set.
                                    Blessing It Ladyship On Sensible Judgment.
                                </li>
                            </ul>
                        </div>
                        {/* Blog Card */}
                        <div className="max-w-[300px] flex flex-col gap-y-4">
                            <img
                                className="w-full h-[300px] object-cover rounded-md"
                                src="https://i.pinimg.com/564x/c0/d2/88/c0d288a9a2ca075103c7d4fd7c1e121f.jpg"
                                alt="Blog 2"
                            />
                            <ul className="flex flex-col gap-y-3">
                                <li className="text-xl md:text-2xl text-nun font-bold text-[#2C2825]">
                                    For Beauty
                                </li>
                                <li className="text-sm break-words text-mon font-serif text-[#2C2825]">
                                    Warmly Little Before Cousin Sussex Entire Men Set.
                                    Blessing It Ladyship On Sensible Judgment.
                                </li>
                            </ul>
                        </div>
                        {/* Blog Card */}
                        <div className="max-w-[300px] flex flex-col gap-y-4">
                            <img
                                className="w-full h-[300px] object-cover rounded-md"
                                src="https://i.pinimg.com/564x/b8/f2/50/b8f250c6c1017f298cbf50df4ed5ded1.jpg"
                                alt="Blog 3"
                            />
                            <ul className="flex flex-col gap-y-3">
                                <li className="text-xl md:text-2xl text-nun font-bold text-[#2C2825]">
                                    For Beauty
                                </li>
                                <li className="text-sm break-words text-mon font-serif text-[#2C2825]">
                                    Warmly Little Before Cousin Sussex Entire Men Set.
                                    Blessing It Ladyship On Sensible Judgment.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home_9