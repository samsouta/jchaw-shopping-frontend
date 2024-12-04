import { Button } from '@nextui-org/react'
import React from 'react'
import { Link } from 'react-router-dom'


const Home_6: React.FC = () => {
    return (
        <>
            <div className="mt-16 px-4 md:px-8">
                <div className="grid grid-cols-12 gap-6">
                    {/* Image Section */}
                    <div
                        className="col-span-12 md:col-span-6 flex justify-center"
                    >
                        <img
                            className="w-full max-w-[400px] h-auto object-cover rounded-lg shadow-md"
                            src={'https://i.pinimg.com/736x/0e/85/c5/0e85c559142be3bfe4ae6c18e2be0dd6.jpg'}
                            alt="Trendy Collection"
                        />
                    </div>

                    {/* Content Section */}
                    <div
                        className="col-span-12 md:col-span-6 flex items-center"
                    >
                        <div className="flex flex-col gap-y-6 w-full md:max-w-[440px]">
                            {/* Title and Description */}
                            <ul className="flex flex-col gap-y-5 break-words">
                                <li className="text-2xl text-[var(--dark-brown)] header-text tracking-wider">
                                    Trendy
                                </li>
                                <li className="text-sm md:text-lg lato-light text-gray-600 leading-relaxed">
                                    A collection of hammered gold discs swing from the top and bottom of a shimmery gold hoop, creating a noisy fringe. Earring attaches to a standard fishhook fitting. Sold as one pair of earrings. Other hoop designs do not complete the circle, but penetrate through the ear in a post, using the same attachment techniques that apply to stud earrings.
                                </li>
                            </ul>
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