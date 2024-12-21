import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { motion } from 'framer-motion';

interface SwripperBtnProps {
    prevElRef: React.RefObject<HTMLButtonElement>;
    nextElRef: React.RefObject<HTMLButtonElement>;
}

const SwripperBtn: React.FC<SwripperBtnProps> = ({ prevElRef, nextElRef }) => {
    return (
        <div className="z-50 flex gap-x-5">
            {/* Previous Button */}
            <button
                ref={prevElRef} // Assign custom previous button reference
                className="custom-prev-btn bg-white w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full p-2 flex justify-center items-center shadow-md"
            >
                <IoIosArrowBack className="text-lg md:text-xl text-[#3D3D3F]" />
            </button>

            {/* Next Button */}
            <button
                ref={nextElRef} // Assign custom next button reference
                className="custom-next-btn bg-[var(--dark-brown)] w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full p-2 flex justify-center items-center shadow-md"
            >
                <IoIosArrowForward className="text-white text-lg md:text-xl" />
            </button>
        </div>
    );
};

export default SwripperBtn;
