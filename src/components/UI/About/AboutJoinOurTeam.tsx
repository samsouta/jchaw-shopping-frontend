import React from 'react';
import { Image } from "@nextui-org/react";
import { IoMdArrowForward } from "react-icons/io";
import { JoinOurTeamContext, JoinOurTeamList } from '../../../data/about';
import AboutJoinOurTeamCard from './AboutJoinOurTeamCard';

const AboutJoinOurTeam: React.FC = () => {
    return (
        <div className="p-4 sm:p-6 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 lg:gap-0 mt-20 lg:mt-40 place-content-center join-our-team-bg rounded-2xl shadow-lg h-auto lg:h-[500px]">
                {/* Image Section */}
                <div className="col-span-1 lg:col-span-5 flex justify-center items-center">
                    <Image
                        isBlurred
                        src={JoinOurTeamContext?.img}
                        alt="NextUI Album Cover"
                        className="m-5 w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] object-cover rounded-xl"
                    />
                </div>

                {/* Content Section */}
                <div className="col-span-1 lg:col-span-5 grid gap-y-6 place-content-center px-3">
                    <h1 className="text-nun text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center lg:text-left">
                        {JoinOurTeamContext?.title}
                    </h1>
                    <span className="text-mon text-sm sm:text-md lg:text-lg text-center lg:text-left">
                        {JoinOurTeamContext?.desc}
                    </span>

                    {/* Cards Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {JoinOurTeamList?.map((data) => (
                            <div key={data?.id}>
                                <AboutJoinOurTeamCard data={data} />
                            </div>
                        ))}
                    </div>

                    {/* Button Section */}
                    <div className="flex justify-center lg:justify-start">
                        <button className="bg-transparent mb-2 border-none">
                            <span className="flex items-center gap-x-1 join-out-team-click text-nun text-lg font-bold">
                                See our job postings
                                <span>
                                    <IoMdArrowForward />
                                </span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutJoinOurTeam;
