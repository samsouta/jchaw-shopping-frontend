import React from 'react';
import { Image } from "@nextui-org/react";
import { aboutMe1img, aboutMe2img, aboutMe3img, aboutMecontext } from '../../../data/about';

const About_me: React.FC = () => {
    return (
        <>
            <div
                id="about-me"
                className='grid grid-cols-1 lg:grid-cols-10 py-10 sm:py-14 lg:py-[70px] h-auto lg:h-screen w-full'
            >
                {/* Side 1 */}
                <div className='col-span-5 px-4 sm:px-8 lg:px-5 pt-10 sm:pt-20 lg:pt-28'>
                    <h1 className='montserrat text-[2rem] sm:text-[3rem] lg:text-[4rem] font-bold text-[var(--gold)] leading-snug lg:leading-none'>
                        {aboutMecontext?.title}
                    </h1>
                    <p className='lato-regular text-[var(--dark-brown)] text-base sm:text-lg lg:text-xl mt-4 lg:mt-6'>
                        {aboutMecontext?.desc}
                    </p>
                </div>
                {/* Side 2 */}
                <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-12 gap-4 sm:gap-5 col-span-5 px-4 sm:px-8 lg:px-0'>
                    {/* Image Column 1 */}
                    <div className='col-span-1 lg:col-span-4'>
                        <div className='grid grid-cols-1 place-items-center h-full'>
                            <Image
                                isZoomed
                                width={240}
                                className='h-[200px] sm:h-[250px] lg:h-[300px] rounded-lg'
                                alt="NextUI Fruit Image with Zoom"
                                src={aboutMe1img}
                            />
                        </div>
                    </div>
                    {/* Image Column 2 */}
                    <div className='col-span-1 lg:col-span-4'>
                        <div className='grid gap-y-3'>
                            {aboutMe2img?.map((item) => (
                                <Image
                                    key={item?.id}
                                    isZoomed
                                    width={240}
                                    className='h-[200px] sm:h-[250px] lg:h-[300px] rounded-lg'
                                    alt="NextUI Fruit Image with Zoom"
                                    src={item?.url}
                                />
                            ))}
                        </div>
                    </div>
                    {/* Image Column 3 */}
                    <div className='col-span-1 lg:col-span-4'>
                        <div className='grid gap-y-3'>
                            {aboutMe3img?.map((item) => (
                                <Image
                                    key={item?.id}
                                    isZoomed
                                    width={240}
                                    className='h-[200px] sm:h-[250px] lg:h-[300px] rounded-lg'
                                    alt="NextUI Fruit Image with Zoom"
                                    src={item?.url}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About_me;
