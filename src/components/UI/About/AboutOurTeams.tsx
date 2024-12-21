import React from 'react';
import { ourTeam } from '../../../data/about';
import AboutOurTeamCard from './AboutOurTeamCard';

const AboutOurTeams: React.FC = () => {
    return (
        <div id='about-ourteam' className='mt-20 px-4 sm:px-6 lg:px-10'>
            {/* Title and Description Section */}
            <div className='max-w-full lg:max-w-[600px]'>
                <h1 className='text-[var(--gold)] montserrat font-extrabold text-2xl sm:text-3xl lg:text-4xl'>
                    Our Team
                </h1>
                <p className='lato-regular text-[var(--dark-brown)] text-sm sm:text-md lg:text-lg mt-4'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.
                </p>
            </div>

            {/* Team Grid Section */}
            <div className='mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                {ourTeam?.map((data) => (
                    <div className='col-span-1 flex justify-center' key={data?.id}>
                        <AboutOurTeamCard data={data} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutOurTeams;
