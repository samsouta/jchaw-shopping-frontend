import React from 'react';
import GoogleMap from './GoogleMap';
import { addressList } from '../../../data/contact';


const Address: React.FC = () => {
    return (
        <div className="mt-20">
            {/* Header Section */}
            <div className="flex flex-col items-center gap-y-3 text-center">
                <h1 className="text-4xl font-bold text-[var(--dark-brown)]">CONTACT US</h1>
                <span className="text-lg lato-regular font-light max-w-[500px] text-[var(--dark-brown)]">
                    We align leaders around a shared purpose and strategic story that catalyzes their business and brand to take action.
                </span>
            </div>

            {/* Contact Info Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-16 mx-6 lg:mx-10 p-10 shadow-lg bg-[var(--creamy)] rounded-lg">
                {addressList.map((info, index) => (
                    <ul key={index} className="flex flex-col items-center gap-y-4 text-center">
                        <li>
                            <img className="h-[80px]" src={info.icon} alt={`${info.title} icon`} />
                        </li>
                        <li className="montserrat font-bold text-xl text-[var(--dark-brown)]">{info.title}</li>
                        <li className="text-md lato-regular text-[var(--dark-brown)] break-words max-w-[300px] lg:max-w-[350px] overflow-y-scroll">
                            {info.content.split('\n').map((line, idx) => (
                                <React.Fragment key={idx}>
                                    {line}
                                    <br />
                                </React.Fragment>
                            ))}
                        </li>
                    </ul>
                ))}
            </div>

            {/* Google Map Section */}
            <div className="mt-16 mx-6 lg:mx-10">
                <h1 className="mb-5 text-3xl font-bold text-[#2C2825]">
                    Google Map <span className="text-sm text-[#7fd1ae] font-serif">FIND WITH LOCATION</span>
                </h1>
                <GoogleMap />
            </div>
        </div>
    );
};

export default Address;
