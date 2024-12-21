import React from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import { jloadimg } from '../../../assets/img';
const JLoading: React.FC = () => {
    return (
        <>
            <div className='flex justify-center items-center fixed backdrop-blur-sm inset-0 z-50 bg-opacity-50 bg-black/40' >
                {/* Using Framer Motion for animation */}
                <motion.img
                    className="w-[250px]"
                    src={jloadimg} 
                    alt="Loading logo"
                    initial={{ scale: 1 }} // Initial state
                    animate={{ scale: 1.1 }} // Final state
                    transition={{
                        scale: {
                            repeat: Infinity,
                            repeatType: 'loop',
                            duration: 1.5,
                            ease: 'easeInOut'
                        }
                    }}
                />
            </div>
        </>
    );
};

export default JLoading;
