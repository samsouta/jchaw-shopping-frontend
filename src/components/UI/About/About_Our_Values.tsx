import React from 'react';
import { ourValuesContext, ourValuesContext2 } from '../../../data/about';

const About_Our_Values: React.FC = () => {
    return (
        <div id='about-values' className='mt-20 px-4 sm:px-6 lg:px-10'>
            {/* Title and Description Section */}
            <div className='max-w-full lg:max-w-[600px]'>
                <h1 className='text-[var(--gold)] montserrat font-extrabold text-2xl sm:text-3xl lg:text-4xl'>
                    {ourValuesContext?.title}
                </h1>
                <p className='lato-regular text-[var(--dark-brown)] text-sm sm:text-md lg:text-lg mt-4'>
                    {ourValuesContext?.desc}
                </p>
            </div>

            {/* Values Grid Section */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-12 gap-6'>
                {ourValuesContext2?.map((item) => (
                    <div key={item?.id} className='col-span-1'>
                        <h1 className='text-[var(--gold)] montserrat font-extrabold text-md sm:text-lg lg:text-xl'>
                            {item?.title}
                        </h1>
                        <span className='lato-regular text-[var(--dark-brown)] text-sm sm:text-md mt-2 block'>
                            {item?.desc}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About_Our_Values;
