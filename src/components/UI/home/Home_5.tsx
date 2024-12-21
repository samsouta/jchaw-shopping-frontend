import React from 'react'
import { home5DataRight ,home5DataLeft } from '../../../data/home'

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
                            {home5DataLeft?.map((item)=>(
                                <ul key={item.id} className="flex flex-col gap-y-5 break-words">
                                <li className="text-2xl text-[var(--dark-brown)] header-text tracking-wider">
                                    {item.title}
                                </li>
                                <li className="text-sm md:text-lg lato-light text-gray-600 leading-relaxed">
                                    {item.desc}
                                </li>
                            </ul>
                            ))}
                        </div>
                    </div>

                    {/* Image Section */}
                    <div
                        className="col-span-12 md:col-span-6 flex justify-center items-center"
                    >
                        {
                            home5DataRight.map((item)=>(
                                <img
                                key={item.id}
                            className="w-full max-w-[400px] h-auto object-cover rounded-lg shadow-md"
                            src={item.url}
                            alt="Gold Chains"
                        />
                            ))
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home_5