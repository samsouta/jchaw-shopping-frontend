import { Button } from '@nextui-org/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { home6DataLeft, home6DataRight } from '../../../data/home'

const Home_6: React.FC = () => {
    return (
        <>
            <div className="mt-16 px-4 md:px-8">
                <div className="grid grid-cols-12 gap-6">
                    {/* Image Section */}
                    <div
                        className="col-span-12 md:col-span-6 flex justify-center"
                    >
                        {
                            home6DataLeft?.map((item) => (
                                <img
                                    key={item.id}
                                    className="w-full max-w-[400px] h-auto object-cover rounded-lg shadow-md"
                                    src={item?.url}
                                    alt="Trendy Collection"
                                />
                            ))
                        }
                    </div>

                    {/* Content Section */}
                    <div
                        className="col-span-12 md:col-span-6 flex items-center"
                    >
                        <div className="flex flex-col gap-y-6 w-full md:max-w-[440px]">
                            {/* Title and Description */}
                            {
                                home6DataRight?.map((item) => (
                                    <ul key={item.id} className="flex flex-col gap-y-5 break-words">
                                        <li className="text-2xl text-[var(--dark-brown)] header-text tracking-wider">
                                            {item.title}
                                        </li>
                                        <li className="text-sm md:text-lg lato-light text-gray-600 leading-relaxed">
                                            {item.desc}
                                        </li>
                                    </ul>
                                ))
                            }
                            {/* Button */}
                            <div>
                                <Link to="/shop">
                                    <Button
                                        className="bg-[var(--tan)] text-[var(--dark-brown)]"
                                        variant="faded"
                                        radius="sm"
                                    >
                                        ADD TO CART
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home_6