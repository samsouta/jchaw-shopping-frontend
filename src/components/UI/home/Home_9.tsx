import React from 'react'
import { OurBlogsBase } from '../../../data/home'

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
                        {
                            OurBlogsBase?.map((item) => (
                                <div key={item.id} className="max-w-[300px] flex flex-col gap-y-4">
                                    <img
                                        className="w-full h-[300px] object-cover rounded-md"
                                        src={item.url}
                                        alt={item.title}
                                    />
                                    <ul className="flex flex-col gap-y-3">
                                        <li className="text-xl montserrat font-medium text-[var(--dark-brown)] ">
                                            {item.title}
                                        </li>
                                        <li className=" break-words text-sm lato-regular text-gray-600">
                                            {item.desc}
                                        </li>
                                    </ul>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home_9