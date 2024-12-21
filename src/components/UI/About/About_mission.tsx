import React from 'react';
import { Image } from "@nextui-org/react";
import { AboutMissionList, gpimg, OurMissionDescList, OurMissionTitleList } from '../../../data/about';

const About_mission: React.FC = () => {
    return (
        <div id='about-mission' className='w-full py-10 lg:py-20'>
            <div className='grid grid-cols-1 lg:grid-cols-10 gap-y-10 lg:gap-0 h-auto lg:h-screen'>
                {/* Side 1 */}
                <div className='col-span-1 lg:col-span-5 px-4 sm:px-8 lg:px-5 pt-10 sm:pt-16 lg:pt-28'>
                    <h1 className=' text-[var(--gold)] montserrat text-xl sm:text-2xl lg:text-3xl font-extrabold leading-snug lg:leading-none'>
                        {OurMissionTitleList}
                    </h1>
                    {OurMissionDescList?.map((item) => (
                        <p
                            key={item?.id}
                            className='lato-regular text-[var(--dark-brown)] sm:text-lg lg:text-xl mt-4 lg:mt-6'
                        >
                            {item?.desc}
                        </p>
                    ))}
                </div>
                {/* Side 2 */}
                <div className='col-span-1 lg:col-span-5 pt-10 sm:pt-16 lg:pt-28'>
                    <div className='grid gap-y-6 lg:gap-y-4 place-content-center mt-6 lg:mt-11 px-4 sm:px-8 lg:px-0'>
                        {AboutMissionList?.map((item) => (
                            <div
                                key={item?.id}
                                className='row-span-1 grid gap-y-2 sm:gap-y-4'
                            >
                                <h1 className=' text-[var(--gold)] montserrat text-3xl sm:text-4xl lg:text-[50px] font-bold'>
                                    {item?.title}
                                </h1>
                                <span className='lato-regular text-[var(--dark-brown)] text-sm sm:text-md'>
                                    {item?.desc}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-center mt-8 lg:mt-16'>
                <Image
                    className='w-full sm:w-[40rem] lg:w-[88rem] h-[15rem] sm:h-[25rem] lg:h-[35rem] object-cover rounded-2xl'
                    src={gpimg}
                    fallbackSrc="https://via.placeholder.com/300x200"
                    alt="we gp pic"
                />
            </div>
        </div>
    );
};

export default About_mission;
